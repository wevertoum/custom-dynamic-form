declare namespace Models {
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
      request?: string;
      request_token?: string;
      request_key_label?: string;
      request_key_extra_label?: string;
      request_key_value?: string;
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
      | "autocomplete";

    type FormListType = "string" | "number" | "select";
  }
}
