/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HousingCreateFormInputValues = {
    name?: string;
    description?: string;
    locality?: string;
    Category?: string;
    Developer?: string;
    CompletionDate?: string;
    Tenure?: number;
    LandTitle?: string;
    Storey?: string;
    Unit?: string;
    Block?: string;
    Parking?: string;
    LaunchPrice?: number;
};
export declare type HousingCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    locality?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    Developer?: ValidationFunction<string>;
    CompletionDate?: ValidationFunction<string>;
    Tenure?: ValidationFunction<number>;
    LandTitle?: ValidationFunction<string>;
    Storey?: ValidationFunction<string>;
    Unit?: ValidationFunction<string>;
    Block?: ValidationFunction<string>;
    Parking?: ValidationFunction<string>;
    LaunchPrice?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HousingCreateFormOverridesProps = {
    HousingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    locality?: PrimitiveOverrideProps<TextFieldProps>;
    Category?: PrimitiveOverrideProps<SelectFieldProps>;
    Developer?: PrimitiveOverrideProps<TextFieldProps>;
    CompletionDate?: PrimitiveOverrideProps<TextFieldProps>;
    Tenure?: PrimitiveOverrideProps<TextFieldProps>;
    LandTitle?: PrimitiveOverrideProps<TextFieldProps>;
    Storey?: PrimitiveOverrideProps<TextFieldProps>;
    Unit?: PrimitiveOverrideProps<TextFieldProps>;
    Block?: PrimitiveOverrideProps<TextFieldProps>;
    Parking?: PrimitiveOverrideProps<TextFieldProps>;
    LaunchPrice?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HousingCreateFormProps = React.PropsWithChildren<{
    overrides?: HousingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HousingCreateFormInputValues) => HousingCreateFormInputValues;
    onSuccess?: (fields: HousingCreateFormInputValues) => void;
    onError?: (fields: HousingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HousingCreateFormInputValues) => HousingCreateFormInputValues;
    onValidate?: HousingCreateFormValidationValues;
} & React.CSSProperties>;
export default function HousingCreateForm(props: HousingCreateFormProps): React.ReactElement;
