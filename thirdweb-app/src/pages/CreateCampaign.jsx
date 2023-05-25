import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import { rocket } from "../assets";
import Button from "../components/Button";
import { useStateContext } from "../context";
import { ethers } from "ethers";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

  const handleFormChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const validForm = (form) => {
    Object.keys(form).forEach((i) => {
      if (!form[i].length) return false;
    });
    checkIfImage(form.image, (exists) => {
      if (!exists) {
        alert("Image url is not valid !");
        setForm({ ...form, image: "" });
        return false;
      }
    });
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validForm(form)) return;
    createCampaign({
      ...form,
      target: ethers.utils.parseUnits(form.target, 18),
    });
    setIsLoading(false);
    // navigate("/");
  };

  return (
    <div className="bg-blackLight rounded-[10px] flex justify-center items-center flex-col sm:p-10 p-4">
      {isLoading && "loading...."}
      <div className="flex justify-center items-center shadow-md shadow-black/50 lg:w-2/5 p-[16px] bg-opacity-80 sm:min-w-[250px] bg-gradient-to-r from-indigo-500/25 via-purple-500/50 to-pink-500/75 rounded-md">
        <h1 className="font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Lancer un Projet
        </h1>
        <img src={rocket} alt="rocket" className="w-14 mx-2" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-12 flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px] ">
          <FormField
            labelName="Votre nom *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => {
              handleFormChange("name", e);
            }}
          />
          <FormField
            labelName="Nom du projet *"
            placeholder="Ecrire un titre"
            inputType="text"
            value={form.title}
            handleChange={(e) => {
              handleFormChange("title", e);
            }}
          />
        </div>
        <FormField
          labelName="Description du projet *"
          placeholder="Ecrivez votre histoire"
          inputType="text"
          isTextArea
          value={form.description}
          handleChange={(e) => {
            handleFormChange("description", e);
          }}
        />
        <div className="flex flex-wrap gap-[40px] ">
          <FormField
            labelName="Objectif *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => {
              handleFormChange("target", e);
            }}
          />
          <FormField
            labelName="Deadline *"
            placeholder="Deadline"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => {
              handleFormChange("deadline", e);
            }}
          />
        </div>
        <FormField
          labelName="Image du projet *"
          placeholder="Inserez l'Url de l'image"
          inputType="text"
          value={form.image}
          handleChange={(e) => {
            handleFormChange("image", e);
          }}
        />
        <div className="flex justify-center items-center mt-[40px]">
          <Button
            btnType="submit"
            title="Proposer un nouveau Projet"
            styles="bg-greenDarker shadow-md shadow-black/50"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
