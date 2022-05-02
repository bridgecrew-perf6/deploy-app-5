import React from "react";
import { useQuery } from "react-query";
import { contextResult } from "../../states/result/ResultProvider";
import SectionBasic from "../SectionsResult/SectionBasic";
import Skeleton from "../Skeleton/Skeleton";
import { Div } from "./styles";

const ResultPreview = ({ isLoading }) => {
  const { sectionsList } = contextResult();

  console.log("validate", sectionsList);

  if (isLoading) return <Skeleton lineText={20} />;

  return (
    <Div>
      <h1>Your results</h1>
      {sectionsList.map((data) => {
        return <SectionBasic data={data} key={data.id} />;
      })}
    </Div>
  );
};

export default ResultPreview;
