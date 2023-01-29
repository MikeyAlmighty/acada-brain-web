type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div>
      <p className="text-4xl font-bold">{title}</p>
      <p className="text-2xl font-semi">{description}</p>
    </div>
  );
};
export default Card;
