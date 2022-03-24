declare namespace Search {
  interface AutoCompleteOptions<P = any> {
    label: string;
    request: (...args: any[]) => Promise<any>;
    toOptions: (item: P) => { label: string; value: P | string };
    storageLabel?: string;
    limit?: number;
    adaptKey?: (key: any) => any;
  }


  interface AutoCompleteProps<P> {
    value?: string;
    onChange?: (value: string | undefined) => void;
    onSelect?: (values: any) => void;
    onClear?: () => void;
    allowClear?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
    placeholder?: string;
  }
}
