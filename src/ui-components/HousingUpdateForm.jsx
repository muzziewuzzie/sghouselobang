/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getHousing } from "../graphql/queries";
import { updateHousing } from "../graphql/mutations";
export default function HousingUpdateForm(props) {
  const {
    id: idProp,
    housing: housingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    locality: "",
    Category: "",
    Developer: "",
    CompletionDate: "",
    Tenure: "",
    LandTitle: "",
    Storey: "",
    Unit: "",
    Block: "",
    Parking: "",
    LaunchPrice: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [locality, setLocality] = React.useState(initialValues.locality);
  const [Category, setCategory] = React.useState(initialValues.Category);
  const [Developer, setDeveloper] = React.useState(initialValues.Developer);
  const [CompletionDate, setCompletionDate] = React.useState(
    initialValues.CompletionDate
  );
  const [Tenure, setTenure] = React.useState(initialValues.Tenure);
  const [LandTitle, setLandTitle] = React.useState(initialValues.LandTitle);
  const [Storey, setStorey] = React.useState(initialValues.Storey);
  const [Unit, setUnit] = React.useState(initialValues.Unit);
  const [Block, setBlock] = React.useState(initialValues.Block);
  const [Parking, setParking] = React.useState(initialValues.Parking);
  const [LaunchPrice, setLaunchPrice] = React.useState(
    initialValues.LaunchPrice
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = housingRecord
      ? { ...initialValues, ...housingRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setLocality(cleanValues.locality);
    setCategory(cleanValues.Category);
    setDeveloper(cleanValues.Developer);
    setCompletionDate(cleanValues.CompletionDate);
    setTenure(cleanValues.Tenure);
    setLandTitle(cleanValues.LandTitle);
    setStorey(cleanValues.Storey);
    setUnit(cleanValues.Unit);
    setBlock(cleanValues.Block);
    setParking(cleanValues.Parking);
    setLaunchPrice(cleanValues.LaunchPrice);
    setErrors({});
  };
  const [housingRecord, setHousingRecord] = React.useState(housingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getHousing.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getHousing
        : housingModelProp;
      setHousingRecord(record);
    };
    queryData();
  }, [idProp, housingModelProp]);
  React.useEffect(resetStateValues, [housingRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    locality: [],
    Category: [],
    Developer: [],
    CompletionDate: [],
    Tenure: [],
    LandTitle: [],
    Storey: [],
    Unit: [],
    Block: [],
    Parking: [],
    LaunchPrice: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description: description ?? null,
          locality: locality ?? null,
          Category: Category ?? null,
          Developer: Developer ?? null,
          CompletionDate: CompletionDate ?? null,
          Tenure: Tenure ?? null,
          LandTitle: LandTitle ?? null,
          Storey: Storey ?? null,
          Unit: Unit ?? null,
          Block: Block ?? null,
          Parking: Parking ?? null,
          LaunchPrice: LaunchPrice ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateHousing.replaceAll("__typename", ""),
            variables: {
              input: {
                id: housingRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "HousingUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              locality,
              Category,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey,
              Unit,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              locality,
              Category,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey,
              Unit,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Locality"
        isRequired={false}
        isReadOnly={false}
        value={locality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality: value,
              Category,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey,
              Unit,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.locality ?? value;
          }
          if (errors.locality?.hasError) {
            runValidationTasks("locality", value);
          }
          setLocality(value);
        }}
        onBlur={() => runValidationTasks("locality", locality)}
        errorMessage={errors.locality?.errorMessage}
        hasError={errors.locality?.hasError}
        {...getOverrideProps(overrides, "locality")}
      ></TextField>
      <SelectField
        label="Category"
        placeholder="Please select an option"
        isDisabled={false}
        value={Category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category: value,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey,
              Unit,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.Category ?? value;
          }
          if (errors.Category?.hasError) {
            runValidationTasks("Category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("Category", Category)}
        errorMessage={errors.Category?.errorMessage}
        hasError={errors.Category?.hasError}
        {...getOverrideProps(overrides, "Category")}
      >
        <option
          children="Hdb"
          value="HDB"
          {...getOverrideProps(overrides, "Categoryoption0")}
        ></option>
        <option
          children="Condominium"
          value="CONDOMINIUM"
          {...getOverrideProps(overrides, "Categoryoption1")}
        ></option>
        <option
          children="Landed"
          value="LANDED"
          {...getOverrideProps(overrides, "Categoryoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Developer"
        isRequired={false}
        isReadOnly={false}
        value={Developer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category,
              Developer: value,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey,
              Unit,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.Developer ?? value;
          }
          if (errors.Developer?.hasError) {
            runValidationTasks("Developer", value);
          }
          setDeveloper(value);
        }}
        onBlur={() => runValidationTasks("Developer", Developer)}
        errorMessage={errors.Developer?.errorMessage}
        hasError={errors.Developer?.hasError}
        {...getOverrideProps(overrides, "Developer")}
      ></TextField>
      <TextField
        label="Completion date"
        isRequired={false}
        isReadOnly={false}
        value={CompletionDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category,
              Developer,
              CompletionDate: value,
              Tenure,
              LandTitle,
              Storey,
              Unit,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.CompletionDate ?? value;
          }
          if (errors.CompletionDate?.hasError) {
            runValidationTasks("CompletionDate", value);
          }
          setCompletionDate(value);
        }}
        onBlur={() => runValidationTasks("CompletionDate", CompletionDate)}
        errorMessage={errors.CompletionDate?.errorMessage}
        hasError={errors.CompletionDate?.hasError}
        {...getOverrideProps(overrides, "CompletionDate")}
      ></TextField>
      <TextField
        label="Tenure"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Tenure}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category,
              Developer,
              CompletionDate,
              Tenure: value,
              LandTitle,
              Storey,
              Unit,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.Tenure ?? value;
          }
          if (errors.Tenure?.hasError) {
            runValidationTasks("Tenure", value);
          }
          setTenure(value);
        }}
        onBlur={() => runValidationTasks("Tenure", Tenure)}
        errorMessage={errors.Tenure?.errorMessage}
        hasError={errors.Tenure?.hasError}
        {...getOverrideProps(overrides, "Tenure")}
      ></TextField>
      <TextField
        label="Land title"
        isRequired={false}
        isReadOnly={false}
        value={LandTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle: value,
              Storey,
              Unit,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.LandTitle ?? value;
          }
          if (errors.LandTitle?.hasError) {
            runValidationTasks("LandTitle", value);
          }
          setLandTitle(value);
        }}
        onBlur={() => runValidationTasks("LandTitle", LandTitle)}
        errorMessage={errors.LandTitle?.errorMessage}
        hasError={errors.LandTitle?.hasError}
        {...getOverrideProps(overrides, "LandTitle")}
      ></TextField>
      <TextField
        label="Storey"
        isRequired={false}
        isReadOnly={false}
        value={Storey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey: value,
              Unit,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.Storey ?? value;
          }
          if (errors.Storey?.hasError) {
            runValidationTasks("Storey", value);
          }
          setStorey(value);
        }}
        onBlur={() => runValidationTasks("Storey", Storey)}
        errorMessage={errors.Storey?.errorMessage}
        hasError={errors.Storey?.hasError}
        {...getOverrideProps(overrides, "Storey")}
      ></TextField>
      <TextField
        label="Unit"
        isRequired={false}
        isReadOnly={false}
        value={Unit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey,
              Unit: value,
              Block,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.Unit ?? value;
          }
          if (errors.Unit?.hasError) {
            runValidationTasks("Unit", value);
          }
          setUnit(value);
        }}
        onBlur={() => runValidationTasks("Unit", Unit)}
        errorMessage={errors.Unit?.errorMessage}
        hasError={errors.Unit?.hasError}
        {...getOverrideProps(overrides, "Unit")}
      ></TextField>
      <TextField
        label="Block"
        isRequired={false}
        isReadOnly={false}
        value={Block}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey,
              Unit,
              Block: value,
              Parking,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.Block ?? value;
          }
          if (errors.Block?.hasError) {
            runValidationTasks("Block", value);
          }
          setBlock(value);
        }}
        onBlur={() => runValidationTasks("Block", Block)}
        errorMessage={errors.Block?.errorMessage}
        hasError={errors.Block?.hasError}
        {...getOverrideProps(overrides, "Block")}
      ></TextField>
      <TextField
        label="Parking"
        isRequired={false}
        isReadOnly={false}
        value={Parking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey,
              Unit,
              Block,
              Parking: value,
              LaunchPrice,
            };
            const result = onChange(modelFields);
            value = result?.Parking ?? value;
          }
          if (errors.Parking?.hasError) {
            runValidationTasks("Parking", value);
          }
          setParking(value);
        }}
        onBlur={() => runValidationTasks("Parking", Parking)}
        errorMessage={errors.Parking?.errorMessage}
        hasError={errors.Parking?.hasError}
        {...getOverrideProps(overrides, "Parking")}
      ></TextField>
      <TextField
        label="Launch price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={LaunchPrice}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              locality,
              Category,
              Developer,
              CompletionDate,
              Tenure,
              LandTitle,
              Storey,
              Unit,
              Block,
              Parking,
              LaunchPrice: value,
            };
            const result = onChange(modelFields);
            value = result?.LaunchPrice ?? value;
          }
          if (errors.LaunchPrice?.hasError) {
            runValidationTasks("LaunchPrice", value);
          }
          setLaunchPrice(value);
        }}
        onBlur={() => runValidationTasks("LaunchPrice", LaunchPrice)}
        errorMessage={errors.LaunchPrice?.errorMessage}
        hasError={errors.LaunchPrice?.hasError}
        {...getOverrideProps(overrides, "LaunchPrice")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || housingModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || housingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
