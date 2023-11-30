/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentCardOverridesProps = {
    "99"?: PrimitiveOverrideProps<TextProps>;
    CommentCard?: PrimitiveOverrideProps<FlexProps>;
    CardContent?: PrimitiveOverrideProps<FlexProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    Like?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame29766879?: PrimitiveOverrideProps<FlexProps>;
    Frame29766880?: PrimitiveOverrideProps<FlexProps>;
    Frame29766881?: PrimitiveOverrideProps<FlexProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    UserId?: PrimitiveOverrideProps<TextProps>;
    Menu?: PrimitiveOverrideProps<FlexProps>;
    MenuButton?: MyIconProps;
    TextContent?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CommentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CommentCardOverridesProps | undefined | null;
}>;
export default function CommentCard(props: CommentCardProps): React.ReactElement;
