import useSelectFile from "../../../Hooks/useSelectFile";
import CategoryInput from "./sharable/CategoryInput";
import DescTextBox from "./sharable/DescTextBox";
import ImageUpload from "./sharable/ImageUpload";
import ModNameInput from "./sharable/ModNameInput";
import ModRating from "./sharable/ModRating";
import Price from "./sharable/Price";
import PriceRateLayout from "./sharable/PriceRateLayout";
import Url from "./sharable/Url";
import useReadWriteModSlice from "./useReadWriteModSlice";

export default function ExteriorMod() {
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();
  const { writeToModSlice, mod } = useReadWriteModSlice();

  return (
    <div className="space-y-2.5 -mt-2 w-full">
      <ModNameInput
        placeholder="Akrapovic Rear Carbon Fiber Diffuser..."
        value={mod.title}
        setValue={writeToModSlice}
      />
      <DescTextBox value={mod.desc} setValue={writeToModSlice} />
      <CategoryInput
        placeholder="Diffuser, Carbon Fiber..."
        label="Category Tags"
        id="category"
        setTags={writeToModSlice}
        tags={mod.tags}
      />
      <ImageUpload
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        setImage={writeToModSlice}
        Image={mod?.image}
        onSelectedFile={onSelectedFile}
      />
      <PriceRateLayout>
        <Price price={mod.price} setPrice={writeToModSlice} />
        <ModRating
          setRatingValue={writeToModSlice}
          ratingValue={mod.ratingValue}
        />
      </PriceRateLayout>
      <Url
        setLink={writeToModSlice}
        url={mod.url.link}
        valid={mod.url.isValid}
      />
    </div>
  );
}
