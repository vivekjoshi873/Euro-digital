declare global {
  namespace JSX {
    interface IntrinsicElements {
      "react-widget-uv": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          agent_id?: string;
          schema?: string;
          type?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
