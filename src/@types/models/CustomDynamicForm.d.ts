/// <reference types="react-scripts" />

namespace Models {
  interface CustomDynamicData {
    group: string;
    fields: CustomDynamicData.Field[];
  }

  namespace CustomDynamicData {
    interface Field {
      label: string;
      name: string | string[];
      extra_label?: string;
      extra_name?: string | string[];
      type: FieldType;
      options?: Option[];
      conditions?: Condition;
      required?: boolean;
      min?: number;
      max?: number;
      mask?: string;
      regex?: RegExp;
      showTime?: boolean;
      formList: FormList[];
      rows?: number;
    }

    type Condition = {
      [key: string]: Field[];
    };

    interface Option {
      value: string;
      label: string;
    }

    interface FormList {
      label: string;
      name: string;
      type: FormListType;
      options?: Option[];
      min?: number;
      max?: number;
    }

    type FieldType =
      | "select"
      | "interval"
      | "number"
      | "boolean"
      | "date"
      | "time"
      | "list"
      | "string"
      | "masked"
      | "multicheck"

    type FormListType = "string" | "number" | "select";
  }
}
