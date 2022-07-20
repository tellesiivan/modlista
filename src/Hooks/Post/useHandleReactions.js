import { useAuthState } from "react-firebase-hooks/auth";
import { doc, runTransaction } from "firebase/firestore";
import { auth, firestore } from "../../firebase/clientApp";
import { useDispatch } from "react-redux";
import { authModalStatus } from "../../store/slices/modalsSlice";

export default function useHandleReactions() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  const findNupdateReaction = (reaction) => {
    const userReacted = !!reaction.find((r) => r === user.uid);

    let reactionsArr = reaction;
    if (userReacted) {
      reactionsArr = reactionsArr.filter((r) => r !== user.uid);
    } else {
      reactionsArr = [...reactionsArr, user.uid];
    }

    return reactionsArr;
  };

  const addReaction = async (type, path) => {
    if (!user?.uid)
      return dispatch(authModalStatus({ open: true, from: "login" }));

    // reactionModRef
    const vehicleModRef = doc(firestore, path);
    // check if user already reacted to post(w/ same type => emoji), if it did we remove the reaction count -1
    try {
      const reactionType = type;
      await runTransaction(firestore, async (transaction) => {
        const vehicleModDoc = await transaction.get(vehicleModRef);
        if (!vehicleModDoc.exists()) {
          throw "Document does not exist!";
        }

        const current = vehicleModDoc.data().reactions;

        if (current) {
          // TODO: keep same order or find a way to be consistent with reaction order
          if (current[reactionType]) {
            const updatedReactionsArray = findNupdateReaction(
              current[reactionType]
            );
            console.log({ [reactionType]: updatedReactionsArray, ...current });
            transaction.update(vehicleModRef, {
              reactions: { ...current, [reactionType]: updatedReactionsArray },
            });
          } else {
            transaction.update(vehicleModRef, {
              reactions: {
                ...current,
                [reactionType]: [user.uid],
              },
            });
          }
        } else {
          console.log("update reaction count here and add user id to reaction");

          transaction.update(vehicleModRef, {
            reactions: { [reactionType]: [user.uid] },
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return { addReaction };
}
