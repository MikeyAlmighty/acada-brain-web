type HeadingProps = {
  text: string;
  toUppercase?: boolean;
};

const Heading = ({ text, toUppercase = true }: HeadingProps) => {
  return (
    <h1
      className={`text-4xl pb-12 font-bold text-center ${toUppercase && "uppercase"} text-primary`}
    >
      {text}
    </h1>
  );
};

export default Heading;
