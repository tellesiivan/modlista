import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, increment, collection, runTransaction } from "firebase/firestore";
import { auth, firestore } from "../../firebase/clientApp";

export default function useHandleReactions() {
  const [user] = useAuthState(auth);

  const findNupdateReaction = (reaction) => {
    const userReacted = !!reaction.find((r) => r === user.uid);
    console.log(userReacted);
    let reactionsArr = reaction;
    if (userReacted) {
      reactionsArr = reactionsArr.filter((r) => r !== user.uid);
    } else {
      reactionsArr = [user.uid, ...reactionsArr];
    }
    console.log(`Reactions`, reactionsArr);
    return reactionsArr;
  };

  const addReaction = async (type, path) => {
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

        const current = vehicleModDoc.data().reactions; // TODO: SET OPTIONAL, if it exist then continue

        if (current) {
          console.log(
            "cycle through this reaction:spread existing and add new reaction: ",
            reactionType
          );
          const updatedReactionsArray = findNupdateReaction(
            current[reactionType]
          );

          transaction.update(vehicleModRef, {
            reactions: { [reactionType]: updatedReactionsArray },
          });
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
