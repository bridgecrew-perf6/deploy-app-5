import { Card } from "@shopify/polaris";
import { contextResult } from "../../states/result/ResultProvider";
import Action from "../ActionText/Action";
import SelectList from "../SelectList/SelectList";
import { AddSvg, PrevSvg } from "../Svgs/SvgFiles";
import selectProps from "../SelectList/data";
import { useCallback } from "react";
import FormSection from "./FormSection";
import Button from "../Button/Button";
import { useMutation, useQueryClient } from "react-query";
import Message from "../Message/Message";
import OptionSection from "../OptionList/OptionSection";

const ResultDetails = () => {
  const {
    changeStateList_Fn,
    changeTypeSection_Fn,
    typeSectionSelected,
    sectionsList,
    idCurrentSection,
    changeStateSection_Fn,
    addOptionSection_Fn,
    changeStateOption_Fn,
    saveSection_Fn,
  } = contextResult();


  /* get sections current */
  const sectionCurrent = sectionsList.filter(
    (e) => e.id === idCurrentSection
  )[0];

  const { content } = sectionCurrent;

  /* options select */
  const { optionsSection } = selectProps();

  /* Change select section options */
  const handleSelectChange = useCallback(
    (value) => changeTypeSection_Fn(value),
    []
  );

  /* show list sections */
  const actionChangeList = () => {
    changeStateList_Fn(false);
  };

  /* add options section (images) */
  const actionAddOption = () => {
    addOptionSection_Fn(idCurrentSection);
  };

  /* change state form */
  const handleChangeText = (e) => {
    const { name, value } = e.target;
    changeStateSection_Fn(name, value, idCurrentSection);
  };

  /* change state options sections */
  const handleChangeOption = (e) => {
    let { name, value, type } = e.target;

    if (type === "file") {
      value = URL.createObjectURL(e.target.files[0]);
    }

    let id_option = e.target.dataset.id;

    changeStateOption_Fn(name, value, id_option, idCurrentSection);
  };

  const contentType = /images|blocks/.test(typeSectionSelected);

  /* Send register question update */
  const queryClient = useQueryClient();

  const { mutate, isError, isLoading, isSuccess } = useMutation(
    saveSection_Fn,
    {
      onSuccess: (list) => {
        /* queryClient.invalidateQueries(["getlistsection"]) */
      },
    }
  );

  const actionSaveSection = () => {
    mutate(sectionCurrent);
  };
  /* Send register question update */

  return (
    <Card>
      <Card.Section>
        <Action
          title="Add a sections"
          eventAction={actionChangeList}
          reverse="reverse"
          btnSvg={<PrevSvg />}
        />
      </Card.Section>

      <Card.Section>
        {/* option type section */}
        <SelectList
          title="Type section"
          optionsQuestion={optionsSection}
          selectSelected={typeSectionSelected}
          handleSelectChange={handleSelectChange}
        />
      </Card.Section>

      <Card.Section>
        <FormSection 
          content={content} 
          handleChangeText={handleChangeText} 
        />
      </Card.Section>

      {contentType && (
        <Card.Section>
          <Action
            title="Options"
            btnText="Add"
            btnSvg={<AddSvg />}
            eventAction={actionAddOption}
            divMargin="0 0 19px 0"
          />

          <OptionSection
            content={content}
            handleChangeText={handleChangeOption}
          />
        </Card.Section>
      )}

      <Card.Section>
        <Button
          btnText="Save Section"
          loadingState={isLoading}
          wBtn="100%"
          mBtn="10px 0"
          eventAction={actionSaveSection}
        />
      </Card.Section>

      {/* Interaction messages */}
      {isError && <Message mesagge="Server Error" error={true} />}
      {isSuccess && <Message mesagge="Save section success" />}
    </Card>
  );
};

export default ResultDetails;
