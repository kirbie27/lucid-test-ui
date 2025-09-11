import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

interface ButtonProps$1 extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    shrink?: boolean;
}

declare const ButtonContainer: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

type ModalSize$1 = "small" | "medium" | "medium2" | "large" | "xlarge";
interface ModalProps$1 extends HTMLAttributes<HTMLDialogElement> {
    header?: string;
    show?: boolean;
    children?: React.ReactNode;
    size?: ModalSize$1;
}
declare const Modal: ({ header, children, show, size, ...rest }: ModalProps$1) => react_jsx_runtime.JSX.Element;

declare const Footer: () => react_jsx_runtime.JSX.Element;

interface FieldSetInputProps$2 extends InputHTMLAttributes<HTMLInputElement> {
    type?: Exclude<React__default.HTMLInputTypeAttribute, "checkbox" | "radio">;
    containerstyle?: React__default.CSSProperties;
    containerstyle2?: React__default.CSSProperties;
    customBG?: boolean;
}
declare const FieldSetInput: (props: FieldSetInputProps$2) => react_jsx_runtime.JSX.Element;

declare const LoadingOverlay: React__default.ForwardRefExoticComponent<Omit<any, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

declare const HollowButton: (props: ButtonProps$1) => react_jsx_runtime.JSX.Element;

interface YellowButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}
declare const YellowButton: (props: YellowButtonProps) => react_jsx_runtime.JSX.Element;

declare const FieldFlexRow: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

interface ImageContainerProps extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    src?: string;
    alt?: string;
    loading?: boolean;
}
declare const ImageContainer: (props: ImageContainerProps) => react_jsx_runtime.JSX.Element;

declare const FlexRow: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const InfoContainer: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const ColumnContainer: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

interface ContainerLabelProps extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    img?: string;
    text: string;
}
declare const ContainerLabel: (props: ContainerLabelProps) => react_jsx_runtime.JSX.Element;

interface FieldSetTextAreaProps$1 extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string;
}
declare const FieldSetTextArea: React__default.ForwardRefExoticComponent<FieldSetTextAreaProps$1 & React__default.RefAttributes<HTMLTextAreaElement>>;

declare const colors: {
    primary: string;
    primary_filter: string;
    black: string;
    red: string;
    gray: string;
};

declare const enum skeletonSizes {
    small = "10rem",
    medium = "12rem",
    wide = "15rem"
}

interface LabelContentComponent extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label?: string;
    content?: string;
    loading?: boolean;
    size?: skeletonSizes.small | skeletonSizes.medium | skeletonSizes.wide;
    highlight?: boolean;
}
declare const LabelContentComponent: (props: LabelContentComponent) => react_jsx_runtime.JSX.Element;

interface LabelContentContainerProps$1 extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    header?: string;
}
declare const LabelContentContainer: (props: LabelContentContainerProps$1) => react_jsx_runtime.JSX.Element;

interface LabelContentContainerProps extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    header?: string;
}
declare const LabelContentContainerNoPadding: (props: LabelContentContainerProps) => react_jsx_runtime.JSX.Element;

interface SkeletonSpanProps extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    size?: skeletonSizes.small | skeletonSizes.medium | skeletonSizes.wide;
}
declare const SkeletonSpan: (props: SkeletonSpanProps) => react_jsx_runtime.JSX.Element;

declare const ContentGrid: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

interface MatrixInputProps$1 extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
}
declare const MatrixInput: (props: MatrixInputProps$1) => react_jsx_runtime.JSX.Element;

declare const FlexiRowMatrix: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const FlexiRowMatrixLeftAlign: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const ModalDivider: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;
declare const LeftSideUpPart: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;
interface RightSideDownPartProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    header: string;
}
declare const RightSideDownPart: (props: RightSideDownPartProps) => react_jsx_runtime.JSX.Element;
declare const Divider: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const SideFilterStationary: (props: any) => react_jsx_runtime.JSX.Element;

type ToggleChangedProps$1 = {
    target: {
        value: boolean;
        name: string;
    };
};
type ToggleProps$1 = {
    value?: boolean;
    onChange?: (checked: ToggleChangedProps$1) => void;
    disabled?: boolean;
    name?: string;
};
declare const FilterToggle: (props: ToggleProps$1) => react_jsx_runtime.JSX.Element;

declare const FormContentGrid: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

interface FormContentNavProps {
    value: string;
    onSelect: (s: string) => void;
    routes: string[];
}
declare const FormContentNav: (props: FormContentNavProps) => react_jsx_runtime.JSX.Element;

interface FormSectionProps extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sectionName: string;
    selectedSection?: string;
}
declare const FormSection: (props: FormSectionProps) => react_jsx_runtime.JSX.Element | null;

declare const ButtonContainerNoWrap: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

interface ListMakerComponentProps<T> extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    label?: string;
    data: T[];
    onRemove?: (r: T) => void;
    onOpen?: (s: string, t: string) => void;
    hasAttachments?: boolean;
    binding: keyof T | ((props: T) => React__default.ReactNode);
    disabled?: boolean;
    loading?: boolean;
}
declare function ListMaker<T>(props: ListMakerComponentProps<T>): react_jsx_runtime.JSX.Element;

interface StepsMakerProps extends React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data?: string[];
    handleStepChange?: () => void;
    stepValue?: number;
}
declare const StepsMaker: (props: StepsMakerProps) => react_jsx_runtime.JSX.Element;

declare const FieldFlexRowWrap: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

interface ActionAreaProps extends HTMLAttributes<HTMLDivElement> {
    children?: React__default.ReactNode;
}
declare const ActionArea: React__default.ForwardRefExoticComponent<ActionAreaProps & React__default.RefAttributes<HTMLDivElement>>;

interface ActionContainerProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
declare const ActionContainer: (props: ActionContainerProps) => react_jsx_runtime.JSX.Element;

type ModalSize = "small" | "medium" | "medium2" | "large" | "xlarge";
interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
    header?: string;
    show?: boolean;
    children?: React.ReactNode;
    size?: ModalSize;
}
declare const ModalWithOutline: ({ header, children, show, size, ...rest }: ModalProps) => react_jsx_runtime.JSX.Element;

type ToggleChangedProps = {
    target: {
        value: boolean;
        name: string;
    };
};
type ToggleProps = {
    onChange?: (checked: ToggleChangedProps) => void;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    checkedValue?: string;
    notCheckedValue?: string;
};
declare const Toggle: (props: ToggleProps) => react_jsx_runtime.JSX.Element;

interface FieldSetInputProps$1 extends InputHTMLAttributes<HTMLInputElement> {
    type?: Exclude<React__default.HTMLInputTypeAttribute, "checkbox" | "radio">;
    containerstyle?: React__default.CSSProperties;
    containerstyle2?: React__default.CSSProperties;
    customBG?: boolean;
    name: string;
    formatNumber?: boolean;
}
declare const FieldSetInputCN$1: (props: FieldSetInputProps$1) => react_jsx_runtime.JSX.Element;

type ComboboxItem$1 = {
    label: string;
    value: string;
};
interface ComboboxProps$1 {
    label: string;
    description?: string;
    name: string;
    placeholder: string;
    data: ComboboxItem$1[];
    onChange?: (value: string) => void;
    returnVal: (value: string) => any[];
    disabled?: boolean;
}
declare const FieldSetDropdownForList: ({ label, placeholder, description, name, data, disabled, onChange, returnVal, }: ComboboxProps$1) => react_jsx_runtime.JSX.Element;

type ComboboxItem = {
    label: string;
    value: string;
};
interface ComboboxProps {
    label: string;
    description?: string;
    name: string;
    placeholder: string;
    data: ComboboxItem[];
    onChange?: (value: string) => void;
    disabled?: boolean;
    darkColoredPlaceholder?: boolean;
}
declare const FieldSetDropdown: ({ label, placeholder, name, data, disabled, darkColoredPlaceholder, onChange, }: ComboboxProps) => react_jsx_runtime.JSX.Element;

interface FieldSetInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: Exclude<React__default.HTMLInputTypeAttribute, "checkbox" | "radio">;
    containerstyle?: React__default.CSSProperties;
    containerstyle2?: React__default.CSSProperties;
    customBG?: boolean;
    name: string;
}
declare const FieldSetInputCN: (props: FieldSetInputProps) => react_jsx_runtime.JSX.Element;

interface MatrixInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    name: string;
}
declare const FieldSetMatrix: (props: MatrixInputProps) => react_jsx_runtime.JSX.Element;

interface FieldSetTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string;
    name: string;
}
declare const FieldSetTextAreaCN: React__default.ForwardRefExoticComponent<FieldSetTextAreaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

declare const FlexField: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const FieldFlexRow2: (props: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const MatrixFlexiRowLeftAlign: ({ title, children, ...rest }: React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "default" | "yellow" | "destructive" | "outline" | "ghost" | "link" | "green" | null | undefined;
    size?: "default" | "sm" | "sm_noPadding" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface LucidButtonProps extends React$1.ComponentProps<typeof Button> {
}
declare const LucidButton: React$1.ForwardRefExoticComponent<Omit<LucidButtonProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

export { ActionArea, ActionContainer, Button, ButtonContainer, ButtonContainerNoWrap, ColumnContainer, ContainerLabel, ContentGrid, Divider, FieldSetInput, FieldSetTextArea, FieldSetTextAreaCN, FilterToggle, FieldFlexRow as FlexFieldRow, FieldFlexRowWrap as FlexFieldRowWrap, FlexRow, FlexiRowMatrix, FlexiRowMatrixLeftAlign, Footer, FormContentGrid, FormContentNav, FormSection, HollowButton, ImageContainer, InfoContainer, LabelContentComponent, LabelContentContainer, LabelContentContainerNoPadding, LeftSideUpPart, ListMaker as ListMakerComponent, LoadingOverlay, LucidButton, MatrixInput, Modal, ModalDivider, ModalWithOutline as ModelWithOutline, RightSideDownPart, FieldSetDropdown as ShadFieldSetDropdown, FieldSetDropdownForList as ShadFieldSetDropdownListMaker, FieldSetInputCN$1 as ShadFieldSetInput, FieldSetInputCN as ShadFieldSetInputGray, FieldSetMatrix as ShadFieldSetMatrixInput, Toggle as ShadFieldSetToggle, FlexField as ShadFlexField, FieldFlexRow2 as ShadFlexFieldRow2, MatrixFlexiRowLeftAlign as ShadMatrixFlexiRowLeftAlign, SideFilterStationary, SkeletonSpan, StepsMaker, YellowButton, buttonVariants, colors, skeletonSizes };
