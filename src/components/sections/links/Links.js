import React from "react";
import AdminHeading from "../../helpers/AdminHeading";

export default function Links() {
  const testVin = async () => {
    try {
      const ge = await fetch(
        "https://auto.dev/api/vin/ZPBUA1ZL9KLA00848?apikey=ZrQEPSkKdGVsbGV6aXZhbjdAZ21haWwuY29t"
      );
      const a = await ge.json();
      console.log(a);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AdminHeading
        Heading="Links"
        Desc="Add or update your links here, including YouTube, Twitter, Instagram and more."
      />
      <button onClick={testVin}>Click here</button>
    </>
  );
}
