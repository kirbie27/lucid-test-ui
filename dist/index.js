"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button_default,
  ButtonContainer: () => ButtonContainer_default,
  ButtonContainerNoWrap: () => ButtonContainerNoWrap_default,
  ColumnContainer: () => ColumnContainer_default,
  ContainerLabel: () => ContainerLabel_default,
  ContentGrid: () => ContentGrid_default,
  Divider: () => Divider,
  FieldSetInput: () => FieldSetInput_default,
  FieldSetTextArea: () => FieldSetTextArea_default,
  FieldSetTextAreaCN: () => FieldSet_TextArea_default,
  FilterToggle: () => FilterToggle_default,
  FlexFieldRow: () => FlexFieldRow_default,
  FlexFieldRowWrap: () => FlexFieldRowWrap_default,
  FlexRow: () => FlexRow_default,
  FlexiRowMatrix: () => FlexiRowMatrix_default,
  FlexiRowMatrixLeftAlign: () => FlexiRowMatrixLeftAlign_default,
  Footer: () => Footer_default,
  FormContentGrid: () => FormContentGrid_default,
  FormContentNav: () => FormContentNav_default,
  FormSection: () => FormSection_default,
  HollowButton: () => HollowButton_default,
  ImageContainer: () => ImageContainer_default,
  InfoContainer: () => InfoContainer_default,
  LabelContentComponent: () => LabelContentComponent_default,
  LabelContentContainer: () => LabelContentContainer_default,
  LabelContentContainerNoPadding: () => LabelContentContainerNoPadding_default,
  LeftSideUpPart: () => LeftSideUpPart,
  ListMakerComponent: () => ListMakerComponent_default,
  LoadingOverlay: () => LoadingOverlay_default,
  LucidButton: () => lucid_button_default,
  MatrixInput: () => MatrixInput_default,
  Modal: () => Modal_default,
  ModalDivider: () => ModalDivider_default,
  ModalWithOutline: () => ModalWithOutline_default,
  RightSideDownPart: () => RightSideDownPart,
  ShadFieldSetDropdown: () => FieldSet_Dropdown_default,
  ShadFieldSetDropdownListMaker: () => FieldSet_Dropdown_ListMaker_default,
  ShadFieldSetInput: () => FieldSet_Input_default,
  ShadFieldSetInputGray: () => FieldSet_Input_Gray_default,
  ShadFieldSetMatrixInput: () => FieldSet_MatrixInput_default,
  ShadFieldSetToggle: () => FieldSet_Toggle_default,
  ShadFlexField: () => FlexField_default,
  ShadFlexFieldRow2: () => FlexFieldRow2_default,
  ShadMatrixFlexiRowLeftAlign: () => MatrixFlexiRowLeftAlign_default,
  SideFilterStationary: () => SideFilterStationary,
  SkeletonSpan: () => SkeletonSpan_default,
  StepsMaker: () => StepsMaker_default
});
module.exports = __toCommonJS(index_exports);

// src/components/common/Button/index.module.scss
var index_module_default = {};

// src/components/common/Button/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (props) => {
  const { text, shrink = false, children, type, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      className: shrink ? index_module_default.buttonSmall : index_module_default.button,
      ...rest,
      type: type ? type : "button",
      children: [
        children,
        text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text }) : null
      ]
    }
  );
};
var Button_default = Button;

// src/components/common/ButtonContainer/index.module.scss
var index_module_default2 = {};

// src/components/common/ButtonContainer/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ButtonContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: index_module_default2.buttonContainer, ...rest, children });
};
var ButtonContainer_default = ButtonContainer;

// src/components/common/Modal/index.module.scss
var index_module_default3 = {};

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/common/Modal/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Modal = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}) => {
  const modalSize = { "modal-size": size };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: show ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn(index_module_default3.modalBackground, "h-full"), role: "modal-bg", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: cn(index_module_default3.modalContainer, "bg-background"),
      ...rest,
      ...modalSize,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default3.modalHeaderContainer, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: cn(index_module_default3.modalHeader, "text-foreground"), children: header }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: index_module_default3.contentContainer, children })
      ]
    }
  ) }) : null });
};
var Modal_default = Modal;

// src/components/common/Footer/index.tsx
var import_react = require("react");

// src/components/common/Footer/index.module.scss
var index_module_default4 = {};

// src/components/common/Footer/index.tsx
var import_fa = require("react-icons/fa");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {}), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("footer", { className: `${index_module_default4.footer} dark:bg-accent`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: index_module_default4.container, style: { flex: "2" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "ABOUT THE PROVIDER" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `${index_module_default4.aboutText} dark:text-accent-foreground`, children: "LUCID IT SOLUTIONS is an IT Business Consulting Firm with a goal of providing the right end-to-end business solution to our clients." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "https://luciditsolutions.com/", target: "_blank", children: "Learn more..." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: index_module_default4.container, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "LINKS" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "Terms of Services" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "Privacy Policy" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "BIR WIthholding Tax" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "Social Security System" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: "#", children: "Phil Health" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: index_module_default4.container, style: { flex: "1.2" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "GET IN TOUCH" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `dark:text-accent-foreground`, children: "For concerns or issues, contact us at" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: index_module_default4.iconThenText, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaEnvelope, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "info@luciditsolution.com" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: index_module_default4.iconThenText, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaPhoneAlt, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "dark:text-foreground", children: "+632 8571 2262" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ButtonContainer_default, { style: { justifyContent: "flex-start" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: index_module_default4.iconLink, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaFacebookF, { fill: "white" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: index_module_default4.iconLink, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaTwitter, { fill: "white" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: index_module_default4.iconLink, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa.FaLinkedinIn, { fill: "white" }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: index_module_default4.address, style: { flex: "1.3" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `dark:text-accent-foreground`, children: "\xA9 2017 PAYplusESS. All Rights Reserved." }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `dark:text-accent-foreground`, children: "Version 7.2.086" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: `dark:text-accent-foreground`, children: [
        "Designed by",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-secondary dark:text-foreground", children: "LUCID I.T. SOLUTIONS" })
      ] })
    ] })
  ] }) });
};
var Footer_default = Footer;

// src/components/common/FieldSetInput/index.module.scss
var index_module_default5 = {};

// src/components/common/FieldSetInput/toggle.tsx
var import_react2 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");

// src/components/common/FieldSetInput/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var toggleInputs = ["checkbox", "radio"];
var FieldSetInput = (props) => {
  if (toggleInputs.includes(props.type || "text")) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, {});
  }
  const {
    customBG,
    containerstyle,
    type,
    placeholder,
    containerstyle2,
    ...others
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "fieldset",
    {
      className: customBG ? index_module_default5.fieldsetCustom : index_module_default5.fieldset,
      style: containerstyle,
      "input-type": type || "text",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("legend", { children: placeholder }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "input",
          {
            style: containerstyle2,
            type,
            placeholder,
            ...others,
            autoComplete: "off"
          }
        )
      ]
    }
  ) });
};
var FieldSetInput_default = FieldSetInput;

// src/components/common/LoadingOverlay/index.tsx
var import_react3 = __toESM(require("react"));

// src/components/common/LoadingOverlay/index.module.scss
var index_module_default6 = {};

// src/components/common/LoadingOverlay/index.tsx
var import_framer_motion = require("framer-motion");
var import_jsx_runtime7 = require("react/jsx-runtime");
var LoadingOverlay = import_react3.default.forwardRef((p, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: index_module_default6.hidden, ref, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: index_module_default6.container, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "relative h-28 w-28", children: [...Array(12)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_framer_motion.motion.div,
    {
      className: "absolute h-2 w-2 rounded-full bg-white",
      animate: {
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1, 0.8]
      },
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.1
      },
      style: {
        top: `calc(50% + ${Math.sin(i * Math.PI / 6) * 30}px)`,
        left: `calc(50% + ${Math.cos(i * Math.PI / 6) * 30}px)`,
        transform: "translate(-50%, -50%)"
      }
    },
    i
  )) }) }) });
});
var LoadingOverlay_default = LoadingOverlay;
var LoadingOverlayContext = import_react3.default.createContext(
  () => {
  }
);

// src/components/common/HollowButton/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var HollowButton = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    Button_default,
    {
      style: {
        backgroundColor: "transparent",
        border: "solid 2px #0c6588",
        color: "#0c6588"
      },
      ...props
    }
  );
};
var HollowButton_default = HollowButton;

// src/components/common/FlexFieldRow/index.module.scss
var index_module_default7 = {};

// src/components/common/FlexFieldRow/index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var FieldFlexRow = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: index_module_default7.container, ...rest, children });
};
var FlexFieldRow_default = FieldFlexRow;

// src/components/common/ImageContainer/index.module.scss
var index_module_default8 = {};

// src/components/common/ImageContainer/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var ImageContainer = (props) => {
  const {
    src = void 0,
    alt = "No image found",
    loading = false,
    ...rest
  } = props;
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default8.skeleton, ...rest });
  } else {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: index_module_default8.imageContainer, ...rest, children: src ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "img",
      {
        src,
        alt,
        style: { width: "100%", height: "100%" },
        loading: "eager",
        onError: (e) => {
          const target = e.target;
          target.onerror = null;
          target.src = "/images/lucid-placeholder.png";
        }
      }
    ) : null });
  }
};
var ImageContainer_default = ImageContainer;

// src/components/common/FlexRow/index.module.scss
var index_module_default9 = {};

// src/components/common/FlexRow/index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var FlexRow = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: index_module_default9.container, ...rest, children });
};
var FlexRow_default = FlexRow;

// src/components/common/InfoContainer/index.module.scss
var index_module_default10 = {};

// src/components/common/InfoContainer/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var InfoContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: index_module_default10.container, ...rest, children });
};
var InfoContainer_default = InfoContainer;

// src/components/common/ColumnContainer/index.module.scss
var index_module_default11 = {};

// src/components/common/ColumnContainer/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var ColumnContainer = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: index_module_default11.container, ...rest, children });
};
var ColumnContainer_default = ColumnContainer;

// src/components/common/ContainerLabel/index.module.scss
var index_module_default12 = {};

// src/components/common/ContainerLabel/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var ContainerLabel = (props) => {
  const { img, text, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: index_module_default12.container, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: index_module_default12.imageContainer, children: img ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: img, alt: "LabelIcon" }) : children }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "dark:text-muted", children: text })
  ] });
};
var ContainerLabel_default = ContainerLabel;

// src/components/common/FieldSetTextArea/index.tsx
var import_react4 = __toESM(require("react"));

// src/components/common/FieldSetTextArea/index.module.scss
var index_module_default13 = {};

// src/components/common/FieldSetTextArea/index.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var FieldSetTextArea = import_react4.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("fieldset", { className: index_module_default13.fieldset, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("legend", { children: props.placeholder }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("textarea", { ...props, ref })
  ] }) });
});
var FieldSetTextArea_default = FieldSetTextArea;

// src/components/common/LabelContentComponent/index.module.scss
var index_module_default14 = {};

// src/values/skeleton.ts
var skeletonSizes = /* @__PURE__ */ ((skeletonSizes2) => {
  skeletonSizes2["small"] = "10rem";
  skeletonSizes2["medium"] = "12rem";
  skeletonSizes2["wide"] = "15rem";
  return skeletonSizes2;
})(skeletonSizes || {});
var skeleton_default = skeletonSizes;

// src/components/common/LabelContentComponent/index.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var LabelContentComponent = (props) => {
  const {
    children,
    label = "Label",
    content = "",
    loading = false,
    size = skeleton_default.small,
    highlight,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: index_module_default14.LabelContentContainer, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: `${index_module_default14.label} dark:text-accent-foreground`, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: index_module_default14.content, children: [
      loading ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: index_module_default14.skeleton, style: { width: `${size}` }, children: content }) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "span",
        {
          className: `${highlight ? "text-orange" : "dark:text-white"} ${content === "--no change--" ? "italic" : ""}`,
          children: content == "" ? "No Information" : content
        }
      ),
      children
    ] })
  ] });
};
var LabelContentComponent_default = LabelContentComponent;

// src/components/common/LabelContentContainer/index.module.scss
var index_module_default15 = {};

// src/components/common/LabelContentContainer/index.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var LabelContentContainer = (props) => {
  const { header, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: index_module_default15.container, ...rest, children: [
    header ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: index_module_default15.header, children: header }) : null,
    children
  ] });
};
var LabelContentContainer_default = LabelContentContainer;

// src/components/common/LabelContentContainerNoPadding/index.module.scss
var index_module_default16 = {};

// src/components/common/LabelContentContainerNoPadding/index.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var LabelContentContainerNoPadding = (props) => {
  const { header, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: index_module_default16.container, ...rest, children: [
    header ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: index_module_default16.header, children: header }) : null,
    children
  ] });
};
var LabelContentContainerNoPadding_default = LabelContentContainerNoPadding;

// src/components/common/SkeletonSpan/index.module.scss
var index_module_default17 = {};

// src/components/common/SkeletonSpan/index.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var SkeletonSpan = (props) => {
  const { size = skeleton_default.wide, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { className: index_module_default17.skeleton, ...rest, style: { width: `${size}` }, children: "" });
};
var SkeletonSpan_default = SkeletonSpan;

// src/components/common/ContentGrid/index.module.scss
var index_module_default18 = {};

// src/components/common/ContentGrid/index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var ContentGrid = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: index_module_default18.grid, ...rest, children });
};
var ContentGrid_default = ContentGrid;

// src/components/common/MatrixInput/index.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var MatrixInput = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "form-group", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "border border-secondary bg-secondary text-background dark:text-foreground", children: props.title }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "input",
      {
        className: cn(
          "form-field",
          "border border-secondary bg-transparent text-primary dark:text-foreground"
        ),
        type: props.type || "text",
        placeholder: "0.00",
        ...props
      }
    )
  ] });
};
var MatrixInput_default = MatrixInput;

// src/components/common/FlexiRowMatrix/index.module.scss
var index_module_default19 = {};

// src/components/common/FlexiRowMatrix/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var FlexiRowMatrix = (props) => {
  const { title, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_jsx_runtime22.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { style: {}, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: index_module_default19.title, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: index_module_default19.container, ...rest, children })
  ] }) });
};
var FlexiRowMatrix_default = FlexiRowMatrix;

// src/components/common/FlexiRowMatrixLeftAlign/index.module.scss
var index_module_default20 = {};

// src/components/common/FlexiRowMatrixLeftAlign/index.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var FlexiRowMatrixLeftAlign = (props) => {
  const { title, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_jsx_runtime23.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: {}, children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: index_module_default20.title, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: index_module_default20.container, ...rest, children })
  ] }) });
};
var FlexiRowMatrixLeftAlign_default = FlexiRowMatrixLeftAlign;

// src/components/common/ModalDivider/index.module.scss
var index_module_default21 = {};

// src/components/common/ModalDivider/index.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var ModalDivider = (props) => {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: index_module_default21.Divider, children });
};
var LeftSideUpPart = (props) => {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: index_module_default21.leftSide, children });
};
var RightSideDownPart = (props) => {
  const { children, header } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { style: { fontWeight: "bold" }, children: header }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: index_module_default21.right, children })
  ] }) });
};
var Divider = (props) => {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: index_module_default21.divider });
};
var ModalDivider_default = ModalDivider;

// src/components/common/SideFilterStationary/index.tsx
var import_fa2 = require("react-icons/fa");

// src/components/common/SideFilterStationary/index.module.scss
var index_module_default22 = {};

// src/components/common/SideFilterStationary/index.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var SideFilterStationary = (props) => {
  const {
    header = "Filter Option",
    isOpen = true,
    toggleSideNav = () => {
    },
    children,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "div",
    {
      className: `${isOpen ? index_module_default22.sideFilter : index_module_default22.sideFilterHidden} dark:bg-primary`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: index_module_default22.hideButton, onClick: toggleSideNav, children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "dark:text-white", children: header }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("hr", { className: index_module_default22.line }),
          isOpen ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            import_fa2.FaChevronCircleUp,
            {
              size: "1.3rem",
              className: index_module_default22.HiddenOnBigScreen
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            import_fa2.FaChevronCircleDown,
            {
              size: "1.3rem",
              className: index_module_default22.HiddenOnBigScreen
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "div",
          {
            className: isOpen ? index_module_default22.filterFieldContainer : index_module_default22.filterFieldContainerHidden,
            children
          }
        )
      ]
    }
  );
};

// src/components/common/FilterToggle/index.tsx
var import_react5 = require("react");

// src/components/common/FilterToggle/index.module.scss
var index_module_default23 = {};

// src/components/common/FilterToggle/index.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var FilterToggle = (props) => {
  const {
    value = true,
    onChange = () => {
    },
    disabled = false,
    name = ""
  } = props;
  const toggleRef = (0, import_react5.useRef)(true);
  const markerRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    toggleRef.current = value;
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", value.toString());
  }, [value]);
  const toggleYes = (0, import_react5.useCallback)(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "true");
    toggleRef.current = true;
    onChange({ target: { name, value: true } });
  }, [onChange, name]);
  const toggleNo = (0, import_react5.useCallback)(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "false");
    toggleRef.current = false;
    onChange({ target: { name, value: false } });
  }, [onChange, name]);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: index_module_default23.toggleContainer, "data-disabled": disabled, children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { onClick: toggleYes, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "For Approval" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { onClick: toggleNo, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "History" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: index_module_default23.marker, ref: markerRef })
  ] });
};
var FilterToggle_default = FilterToggle;

// src/components/common/FormFormatter/FormContentGrid/index.module.scss
var index_module_default24 = {};

// src/components/common/FormFormatter/FormContentGrid/index.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var FormContentGrid = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: index_module_default24.grid, ...rest, children });
};
var FormContentGrid_default = FormContentGrid;

// src/components/common/FormFormatter/FormContentNav/index.module.scss
var index_module_default25 = {};

// src/components/common/FormFormatter/FormContentNav/index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var FormContentNav = (props) => {
  const { routes } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("nav", { className: index_module_default25.navBar, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: index_module_default25.navArea, children: routes.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    "a",
    {
      className: s === props.value ? index_module_default25.selectedNavItem : index_module_default25.navItem,
      onClick: () => props.onSelect(s),
      children: s
    },
    i
  )) }) }) });
};
var FormContentNav_default = FormContentNav;

// src/components/common/FormFormatter/FormSection/index.module.scss
var index_module_default26 = {};

// src/components/common/FormFormatter/FormSection/index.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var FormSection = (props) => {
  const { sectionName, selectedSection, children, ...rest } = props;
  if (selectedSection === sectionName)
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ColumnContainer_default, { className: index_module_default26.section, ...rest, children });
  else {
    return null;
  }
};
var FormSection_default = FormSection;

// src/components/common/ButtonContainerNoWrap/index.module.scss
var index_module_default27 = {};

// src/components/common/ButtonContainerNoWrap/index.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var ButtonContainerNoWrap = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: index_module_default27.buttonContainer, ...rest, children });
};
var ButtonContainerNoWrap_default = ButtonContainerNoWrap;

// src/components/common/ListMakerComponent/index.tsx
var import_react6 = require("react");

// src/components/common/ListMakerComponent/index.module.scss
var index_module_default28 = {};

// src/components/common/ListMakerComponent/index.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function ListMaker(props) {
  const {
    children,
    label = "Feedbacks",
    data,
    onRemove = null,
    onOpen = null,
    binding,
    hasAttachments = false,
    disabled = false,
    loading = false,
    ...rest
  } = props;
  const [innerData, setInnerData] = (0, import_react6.useState)(data);
  (0, import_react6.useEffect)(() => {
    setInnerData(data);
  }, [data]);
  const onItemRemove = (item) => {
    if (!onRemove) {
      return;
    }
    onRemove(item);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: index_module_default28.container, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: index_module_default28.header, children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: index_module_default28.label, children: label }),
      disabled ? null : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { children })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: loading ? index_module_default28.listContentLoading : index_module_default28.listContent, children: innerData.length > 0 ? innerData.map((d, i) => {
      let val = "";
      let id = "";
      if (typeof binding !== "function") {
        val = d[binding] + "";
        if (binding === "id") id = d[binding];
      }
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: index_module_default28.removableRow, children: [
        hasAttachments && onOpen !== null ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "a",
          {
            onClick: () => onOpen(d.data, d.fileExtension),
            style: { cursor: "pointer" },
            children: typeof binding === "function" ? limitCharacters(binding(d)) : val
          },
          i
        ) : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("a", { children: typeof binding === "function" ? binding(d) : val }, i),
        disabled ? null : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          Button_default,
          {
            className: index_module_default28.removeButton,
            onClick: () => onItemRemove(d),
            children: "\u2715"
          }
        )
      ] }, i);
    }) : /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: index_module_default28.noItems, children: `No ${label} selected` }) })
  ] });
}
var limitCharacters = (val) => {
  if (typeof val === "string") {
    let extension = val.substring(val.lastIndexOf("."));
    let name = val.substring(0, val.lastIndexOf("."));
    if (name.length > 25) {
      name = name.substring(0, 25) + "..";
    }
    val = name + extension;
    return val;
  }
};
var ListMakerComponent_default = ListMaker;

// src/components/common/StepsMaker/index.module.scss
var index_module_default29 = {};

// src/components/common/StepsMaker/index.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var StepsMaker = (props) => {
  const { data = [], stepValue = 0 } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: index_module_default29.stepsRow, children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "hr",
      {
        style: data.length > 6 ? { width: "90%" } : { width: "80%" },
        className: index_module_default29.line
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "hr",
      {
        className: index_module_default29.loadline,
        style: { width: `${(stepValue + 1) / data.length * 100}%` }
      }
    ),
    data.map((x, i) => {
      return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
        "div",
        {
          style: {
            width: "200px",
            justifyContent: "start"
          },
          className: stepValue == i ? index_module_default29.stepColumnActive : index_module_default29.stepColumn,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
              "div",
              {
                className: `${stepValue == i ? index_module_default29.outerCircleActive + ` dark:border-white` : index_module_default29.outerCircle + " dark:border-primary"} dark:bg-primary`,
                children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                  "div",
                  {
                    className: `${stepValue == i ? index_module_default29.innerCircleActive : index_module_default29.innerCircle} dark:border-black`,
                    children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                      "h1",
                      {
                        className: `${stepValue == i ? index_module_default29.numberActive + " dark:text-white" : index_module_default29.number} `,
                        children: i + 1
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: index_module_default29.columnDiv, children: [
              /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("p", { className: index_module_default29.smallText, children: [
                "Step ",
                i + 1,
                " of ",
                data.length
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                "p",
                {
                  style: { textAlign: "center" },
                  className: stepValue == i ? index_module_default29.labelActive + " dark:text-white" : index_module_default29.label,
                  children: data[i]
                }
              )
            ] })
          ]
        },
        i
      );
    })
  ] });
};
var StepsMaker_default = StepsMaker;

// src/components/common/FlexFieldRowWrap/index.module.scss
var index_module_default30 = {};

// src/components/common/FlexFieldRowWrap/index.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var FieldFlexRowWrap = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: index_module_default30.container, ...rest, children });
};
var FlexFieldRowWrap_default = FieldFlexRowWrap;

// src/components/common/ModalWithOutline/index.module.scss
var index_module_default31 = {};

// src/components/common/ModalWithOutline/index.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var ModalWithOutline = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}) => {
  const modalSize = { "modal-size": size };
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_jsx_runtime34.Fragment, { children: show ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: cn(index_module_default31.modalBackground, "h-full"), role: "modal-bg", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    "div",
    {
      className: cn(index_module_default31.modalContainer, "bg-background"),
      ...rest,
      ...modalSize,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: index_module_default31.modalHeaderContainer, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: cn(index_module_default31.modalHeader, "text-foreground"), children: header }) }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: index_module_default31.contentContainer, children })
      ]
    }
  ) }) : null });
};
var ModalWithOutline_default = ModalWithOutline;

// src/components/shad/FieldSetInput/index.module.scss
var index_module_default32 = {};

// src/components/ui/form.tsx
var React8 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_react_hook_form = require("react-hook-form");

// src/components/ui/label.tsx
var React7 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime35 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/form.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
var FormFieldContext = React8.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react_hook_form.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React8.useContext(FormFieldContext);
  const itemContext = React8.useContext(FormItemContext);
  const { getFieldState, formState } = (0, import_react_hook_form.useFormContext)();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React8.createContext(
  {}
);
var FormItem = React8.forwardRef(({ className, ...props }, ref) => {
  const id = React8.useId();
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { ref, className: cn("space-y-2", className), ...props }) });
});
FormItem.displayName = "FormItem";
var FormLabel = React8.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    Label,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React8.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    import_react_slot.Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React8.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React8.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-sm font-medium text-destructive", className),
      ...props,
      children: body
    }
  );
});
FormMessage.displayName = "FormMessage";

// src/components/shad/FieldSetInput/FieldSet-Toggle.tsx
var import_react7 = require("react");
var import_jsx_runtime37 = require("react/jsx-runtime");
var Toggle = (props) => {
  const {
    checked = false,
    onChange = () => {
    },
    disabled = false,
    name = "",
    checkedValue = "YES",
    notCheckedValue = "NO"
  } = props;
  const toggleRef = (0, import_react7.useRef)(false);
  const markerRef = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    toggleRef.current = checked;
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", checked.toString());
  }, [checked]);
  const toggleYes = (0, import_react7.useCallback)(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "true");
    toggleRef.current = true;
    onChange({ target: { name, value: true } });
  }, [onChange, name]);
  const toggleNo = (0, import_react7.useCallback)(() => {
    if (markerRef.current)
      markerRef.current.setAttribute("data-toggled", "false");
    toggleRef.current = false;
    onChange({ target: { name, value: false } });
  }, [onChange, name]);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: index_module_default32.toggleContainer, "data-disabled": disabled, children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { onClick: toggleYes, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { children: checkedValue }) }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { onClick: toggleNo, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { children: notCheckedValue }) }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: index_module_default32.marker, ref: markerRef, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { children: checked ? checkedValue : notCheckedValue }) }),
    disabled ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: index_module_default32.disabledLabel, children: checked ? checkedValue : notCheckedValue }) : null
  ] });
};
var FieldSet_Toggle_default = Toggle;

// src/components/shad/FieldSetInput/FieldSet-Input.tsx
var import_react_hook_form2 = require("react-hook-form");
var import_moment = __toESM(require("moment"));
var import_jsx_runtime38 = require("react/jsx-runtime");
var toggleInputs2 = ["checkbox", "radio"];
var FieldSetInputCN = (props) => {
  const { control } = (0, import_react_hook_form2.useFormContext)();
  if (toggleInputs2.includes(props.type || "text")) {
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, {});
  }
  const { name, formatNumber, containerstyle2, placeholder, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => {
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(FormItem, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
            "fieldset",
            {
              className: cn(
                index_module_default32.fieldset,
                "rounded-sm border border-border dark:border-[#568293]  "
              ),
              "input-type": props.type || "text",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  "legend",
                  {
                    className: cn(
                      "mx-2 my-0 p-0 text-xs text-border dark:text-[#568293]"
                    ),
                    children: props.placeholder
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  "input",
                  {
                    type: props.type || "text",
                    className: cn(
                      "text-bas w-full border-none px-5 py-2 text-foreground placeholder-transparent outline-none disabled:bg-transparent",
                      props.customBG ? "bg-[#e9eff6]" : "bg-white"
                    ),
                    style: props.containerstyle2,
                    ...rest,
                    ...field,
                    value: props.type?.toLowerCase() === "month" && field.value != void 0 ? `${field.value.toString().substring(0, 4)}-${field.value.toString().substring(4)}` : props.type?.toLowerCase() === "date" ? field.value === "" || field.value === null || field.value === void 0 ? "" : (0, import_moment.default)(
                      field.value?.split("T").length > 1 ? field.value?.split("T")[0] : field.value
                    ).format("YYYY-MM-DD") : props.formatNumber ? field.value?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }) : field.value,
                    autoComplete: "off"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(FormMessage, {})
        ] });
      }
    }
  );
};
var FieldSet_Input_default = FieldSetInputCN;

// src/components/shad/FieldSetInput/FieldSet-Dropdown-ListMaker.tsx
var React15 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");

// src/components/ui/command.tsx
var React11 = __toESM(require("react"));
var import_cmdk = require("cmdk");
var import_lucide_react2 = require("lucide-react");

// src/components/ui/dialog.tsx
var React10 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime39 = require("react/jsx-runtime");
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React10.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DialogOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/ui/command.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
var Command = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  import_cmdk.Command,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md  bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = import_cmdk.Command.displayName;
var CommandInput = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
  "div",
  {
    className: "flex items-center border-b px-3 dark:border-[#568293]",
    "cmdk-input-wrapper": "",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_lucide_react2.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
        import_cmdk.Command.Input,
        {
          ref,
          className: cn(
            "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ",
            className
          ),
          ...props
        }
      )
    ]
  }
));
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  import_cmdk.Command.List,
  {
    ref,
    className: cn(
      "max-h-[300px] overflow-y-auto overflow-x-hidden ",
      className
    ),
    ...props
  }
));
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React11.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  import_cmdk.Command.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  import_cmdk.Command.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  import_cmdk.Command.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  import_cmdk.Command.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none  aria-selected:bg-accent aria-selected:text-primary-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";

// src/components/ui/popover.tsx
var React12 = __toESM(require("react"));
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime41 = require("react/jsx-runtime");
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React12.forwardRef(({ className, align = "center", sideOffset = 0, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-full rounded-md border  bg-popover p-4  text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-[#568293]",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/shad/FieldSetInput/FieldSet-Dropdown-ListMaker.tsx
var import_react_hook_form3 = require("react-hook-form");

// src/components/ui/drawer.tsx
var React13 = __toESM(require("react"));
var import_vaul = require("vaul");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  import_vaul.Drawer.Root,
  {
    shouldScaleBackground,
    ...props
  }
);
Drawer.displayName = "Drawer";
var DrawerTrigger = import_vaul.Drawer.Trigger;
var DrawerPortal = import_vaul.Drawer.Portal;
var DrawerClose = import_vaul.Drawer.Close;
var DrawerOverlay = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  import_vaul.Drawer.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = import_vaul.Drawer.Overlay.displayName;
var DrawerContent = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(DrawerPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(DrawerOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
    import_vaul.Drawer.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  "div",
  {
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
    ...props
  }
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  "div",
  {
    className: cn("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  import_vaul.Drawer.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DrawerTitle.displayName = import_vaul.Drawer.Title.displayName;
var DrawerDescription = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  import_vaul.Drawer.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = import_vaul.Drawer.Description.displayName;

// src/hooks/use-media-query.ts
var React14 = __toESM(require("react"));
function useMediaQuery(query) {
  const [value, setValue] = React14.useState(false);
  React14.useEffect(() => {
    function onChange(event) {
      setValue(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);
  return value;
}

// src/components/shad/FieldSetInput/FieldSet-Dropdown-ListMaker.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
var FieldSetDropdownForList = ({
  label,
  placeholder,
  description,
  name,
  data,
  disabled = false,
  onChange = (value) => {
  },
  returnVal = (value) => []
}) => {
  const [open, setOpen] = React15.useState(false);
  const { control } = (0, import_react_hook_form3.useFormContext)();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    FormField,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(FormItem, { className: " flex flex-col", children: [
        isDesktop ? /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
          !disabled ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
            "fieldset",
            {
              className: cn(
                index_module_default32.fieldset,
                "w-full rounded-sm border border-border dark:border-[#568293] "
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("legend", { className: "text-border dark:text-[#568293]", children: label }),
                /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: [
                  false ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "text-border", children: placeholder }),
                  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_lucide_react3.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 text-border opacity-50" })
                ] })
              ]
            }
          ) }) : /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("fieldset", { className: cn(index_module_default32.fieldset, "w-full border-none"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("legend", { className: "text-border dark:text-[#568293]", children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: false ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "text-foreground", children: placeholder }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(PopoverContent, { className: "z-[101]  m-0 w-[--radix-popover-trigger-width]  p-0", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            DataListMaker,
            {
              name,
              data,
              fieldValue: field.value,
              setOpen,
              onChange,
              returnVal
            }
          ) })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Drawer, { open, onOpenChange: setOpen, children: [
          !disabled ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("fieldset", { className: cn(index_module_default32.fieldset, "w-full"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("legend", { className: "text-border dark:text-foreground", children: placeholder }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-0", children: [
              false ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "text-[0.75rem]", children: data.find((d) => d.value == field.value)?.label }) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "text-[1rem] text-border", children: placeholder }),
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_lucide_react3.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 text-border opacity-50" })
            ] })
          ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("fieldset", { className: cn(index_module_default32.fieldset, "w-full"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("legend", { className: "text-border dark:text-foreground", children: placeholder }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-0", children: false ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "text-[0.75rem] text-foreground", children: data.find((d) => d.value == field.value)?.label }) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "text-[1rem] text-foreground", children: placeholder }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(DrawerContent, { className: "z-[101]", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "mt-4 border-t", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
            DataListMaker,
            {
              name,
              data,
              fieldValue: field.value,
              setOpen,
              onChange,
              returnVal
            }
          ) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(FormMessage, {})
      ] })
    }
  );
};
function DataListMaker({
  name,
  data,
  fieldValue,
  setOpen,
  onChange = (value) => {
  },
  returnVal = (value) => []
}) {
  const { setValue } = (0, import_react_hook_form3.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(Command, { className: "w-full ", children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(CommandInput, { placeholder: "Search" }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(CommandList, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(CommandGroup, { children: data.map((content) => /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
        CommandItem,
        {
          value: content.label,
          onSelect: () => {
            setValue(name, returnVal(content.value));
            setOpen(false);
            onChange(content.value);
          },
          children: [
            content.label,
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
              import_lucide_react3.CheckIcon,
              {
                className: cn(
                  "ml-auto h-4 w-4",
                  content.value === fieldValue ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        content.value
      )) })
    ] })
  ] });
}
var FieldSet_Dropdown_ListMaker_default = FieldSetDropdownForList;

// src/components/shad/FieldSetInput/FieldSet-Dropdown.tsx
var React16 = __toESM(require("react"));
var import_lucide_react4 = require("lucide-react");
var import_react_hook_form4 = require("react-hook-form");
var import_jsx_runtime44 = require("react/jsx-runtime");
var FieldSetDropdown = ({
  label,
  placeholder,
  name,
  data,
  disabled = false,
  darkColoredPlaceholder = false,
  onChange = () => {
  }
}) => {
  const [open, setOpen] = React16.useState(false);
  const { control } = (0, import_react_hook_form4.useFormContext)();
  const isDesktop = useMediaQuery("(min-width: 400px) and (min-height: 720px)");
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    FormField,
    {
      control,
      name,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(FormItem, {
        className: "flex flex-col",
        // isDesktop ?
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
            !disabled ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
              "fieldset",
              {
                className: cn(
                  index_module_default32.fieldset,
                  "w-full rounded-sm border border-border dark:border-[#568293] "
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("legend", { className: "text-border dark:text-[#568293]", children: label }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: [
                    field.value && field.value != -1 ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                      "span",
                      {
                        className: darkColoredPlaceholder ? "text-black" : "text-border",
                        children: placeholder
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_lucide_react4.ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 text-border opacity-50" })
                  ] })
                ]
              }
            ) }) : /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("fieldset", { className: cn(index_module_default32.fieldset, "w-full border-none"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("legend", { className: "text-border dark:text-[#568293]", children: label }),
              /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: " flex w-full flex-row items-center justify-between px-3 pb-2 pt-1", children: field.value && field.value != -1 ? data.find((d) => d.value == field.value)?.label : /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "text-foreground", children: placeholder || "Select from List" }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              PopoverContent,
              {
                className: cn(
                  "  z-[101]  w-[--radix-popover-trigger-width] p-0"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                  DataListMaker2,
                  {
                    name,
                    data,
                    fieldValue: field.value,
                    setOpen,
                    onChange
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(FormMessage, {})
        ]
      })
    }
  );
};
function DataListMaker2({
  name,
  data,
  fieldValue,
  setOpen,
  onChange = (value) => {
  }
}) {
  const { setValue } = (0, import_react_hook_form4.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(Command, { className: cn("w-full"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CommandInput, { placeholder: "Search" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(CommandList, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CommandGroup, { children: data.map((content) => /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
        CommandItem,
        {
          value: content.label,
          onSelect: () => {
            setValue(name, content.value);
            setOpen(false);
            onChange(content.value);
          },
          children: [
            content.label,
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              import_lucide_react4.CheckIcon,
              {
                className: cn(
                  "ml-auto h-4 w-4",
                  content.value === fieldValue ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        content.value
      )) })
    ] })
  ] });
}
var FieldSet_Dropdown_default = FieldSetDropdown;

// src/components/shad/FieldSetInput/index2.module.scss
var index2_module_default = {};

// src/components/shad/FieldSetInput/FieldSet-Input-Gray.tsx
var import_react_hook_form5 = require("react-hook-form");
var import_moment2 = __toESM(require("moment"));
var import_jsx_runtime45 = require("react/jsx-runtime");
var toggleInputs3 = ["checkbox", "radio"];
var FieldSetInputCN2 = (props) => {
  const { control } = (0, import_react_hook_form5.useFormContext)();
  if (toggleInputs3.includes(props.type || "text")) {
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_jsx_runtime45.Fragment, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => {
        return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(FormItem, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
            "fieldset",
            {
              className: cn(
                index2_module_default.fieldset,
                "rounded-sm border border-border dark:border-[#568293]  "
              ),
              "input-type": props.type || "text",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
                  "legend",
                  {
                    className: cn(
                      "mx-2 my-0 p-0 text-xs text-border dark:text-[#568293]"
                    ),
                    children: props.placeholder
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
                  "input",
                  {
                    className: cn(
                      "text-bas w-full border-none px-5 py-2 text-foreground placeholder-transparent outline-none disabled:bg-transparent",
                      props.customBG ? "bg-[#e9eff6]" : "bg-white"
                    ),
                    style: props.containerstyle2,
                    ...field,
                    ...props,
                    value: props.type?.toLowerCase() === "date" ? (0, import_moment2.default)(
                      field.value?.split("T").length > 1 ? field.value?.split("T")[0] : field.value
                    ).format("YYYY-MM-DD") : props.type?.toLowerCase() === "time" ? (0, import_moment2.default)(field.value).format("HH:mm") : field.value,
                    autoComplete: "off"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(FormMessage, {})
        ] });
      }
    }
  );
};
var FieldSet_Input_Gray_default = FieldSetInputCN2;

// src/components/shad/FieldSetInput/FieldSet-MatrixInput.tsx
var import_react_hook_form6 = require("react-hook-form");

// src/components/shad/FieldSetInput/matrix.module.scss
var matrix_module_default = {};

// src/components/shad/FieldSetInput/FieldSet-MatrixInput.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
var FieldSetMatrix = (props) => {
  const { control } = (0, import_react_hook_form6.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(FormItem, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: cn(matrix_module_default.formGroup, "w-full"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "border border-secondary bg-secondary text-background dark:text-foreground", children: props.title }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "input",
          {
            className: cn(
              matrix_module_default.formField,
              "border border-secondary bg-transparent text-primary dark:text-foreground"
            ),
            type: props.type || "text",
            placeholder: "0.00",
            ...props,
            ...field
          }
        )
      ] }) }) })
    }
  );
};
var FieldSet_MatrixInput_default = FieldSetMatrix;

// src/components/shad/FieldSetInput/FieldSet-TextArea.tsx
var import_react8 = __toESM(require("react"));
var import_react_hook_form7 = require("react-hook-form");
var import_jsx_runtime47 = require("react/jsx-runtime");
var FieldSetTextAreaCN = import_react8.default.forwardRef((props, ref) => {
  const { control } = (0, import_react_hook_form7.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    FormField,
    {
      control,
      name: props.name,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(FormItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
          "fieldset",
          {
            className: cn(
              index_module_default32.fieldset,
              "rounded-sm border border-border dark:border-[#568293] "
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("legend", { className: "text-border dark:text-[#568293]", children: props.placeholder }),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("textarea", { ...props, ...field, ref: field.ref })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(FormMessage, {})
      ] })
    }
  ) });
});
var FieldSet_TextArea_default = FieldSetTextAreaCN;

// src/components/shad/FlexField.tsx
var import_jsx_runtime48 = require("react/jsx-runtime");
var FlexField = (props) => {
  const { children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { className: "flex-1", ...rest, children });
};
var FlexField_default = FlexField;

// src/components/shad/FlexFieldRow2.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
var FieldFlexRow2 = (props) => {
  const { children, className, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    "div",
    {
      className: cn(
        "flex flex-col justify-start gap-4 flex-wrap md:flex-row",
        className
      ),
      ...rest,
      children
    }
  );
};
var FlexFieldRow2_default = FieldFlexRow2;

// src/components/shad/MatrixFlexiRowLeftAlign.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
var MatrixFlexiRowLeftAlign = ({
  title,
  children,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { style: {}, children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "mb-[5px] flex text-[14px]", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      "div",
      {
        className: "relative ml-[10px] flex w-[50%] min-w-[150px] flex-col items-baseline justify-start gap-[10px] sm:w-auto sm:min-w-min sm:flex-row sm:gap-[30px]",
        ...rest,
        children
      }
    )
  ] });
};
var MatrixFlexiRowLeftAlign_default = MatrixFlexiRowLeftAlign;

// src/components/shad/lucid-button.tsx
var React19 = __toESM(require("react"));

// src/components/ui/button.tsx
var React18 = __toESM(require("react"));
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime51 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-wrap",
  {
    variants: {
      variant: {
        yellow: "bg-[#d28c00] text-background dark:text-foreground  hover:bg-[#d28c00]/90 ",
        default: "bg-secondary text-background dark:text-foreground hover:bg-secondary/10",
        destructive: "bg-red-700  text-destructive-foreground hover:bg-red-700/90",
        outline: "border-2 border-secondary hover:bg-secondary hover:text-background dark:hover:text-foreground ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-secondary dark:text-foreground underline-offset-4 hover:underline",
        green: "bg-green-800 text-background dark:text-foreground hover:bg-green-800/90"
      },
      size: {
        // default: "h-10 px-4 py-2",
        default: "text-base min-h-[2rem] min-w-[2rem] p-[0.3rem] sm:px-[10px] sm:py-[5px] font-bold leading-none",
        sm: "min-w-[5.5rem] p-[0.6rem] text-[0.75rem] rounded-[5px] font-bold",
        sm_noPadding: "text-[0.75rem]  font-bold",
        lg: " h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button2 = React18.forwardRef(
  ({ className, variant, size, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? import_react_slot2.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      Comp,
      {
        type: type ? type : "button",
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button2.displayName = "Button";

// src/components/shad/lucid-button.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
var LucidButton = React19.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
      Button2,
      {
        ref,
        variant: "ghost",
        className: cn(
          "bg-pink-100 text-pink-700 hover:bg-pink-200 hover:text-pink-900 font-bold rounded-xl",
          className,
          index_module_default32.fieldset
        ),
        ...props,
        children: [
          "Lucid ",
          children
        ]
      }
    );
  }
);
var lucid_button_default = LucidButton;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  ButtonContainer,
  ButtonContainerNoWrap,
  ColumnContainer,
  ContainerLabel,
  ContentGrid,
  Divider,
  FieldSetInput,
  FieldSetTextArea,
  FieldSetTextAreaCN,
  FilterToggle,
  FlexFieldRow,
  FlexFieldRowWrap,
  FlexRow,
  FlexiRowMatrix,
  FlexiRowMatrixLeftAlign,
  Footer,
  FormContentGrid,
  FormContentNav,
  FormSection,
  HollowButton,
  ImageContainer,
  InfoContainer,
  LabelContentComponent,
  LabelContentContainer,
  LabelContentContainerNoPadding,
  LeftSideUpPart,
  ListMakerComponent,
  LoadingOverlay,
  LucidButton,
  MatrixInput,
  Modal,
  ModalDivider,
  ModalWithOutline,
  RightSideDownPart,
  ShadFieldSetDropdown,
  ShadFieldSetDropdownListMaker,
  ShadFieldSetInput,
  ShadFieldSetInputGray,
  ShadFieldSetMatrixInput,
  ShadFieldSetToggle,
  ShadFlexField,
  ShadFlexFieldRow2,
  ShadMatrixFlexiRowLeftAlign,
  SideFilterStationary,
  SkeletonSpan,
  StepsMaker
});
//# sourceMappingURL=index.js.map