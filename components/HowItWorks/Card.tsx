interface CardProps {
  icon: string;
  iconName: string;
  title: string;
  description: string;
}

function Card(props: CardProps) {
  return (
    <div className="w-70 h-66 p-5 bg-secondary/50 backdrop-blur-md border border-border rounded-4xl">
      <figure className="w-28.5 h-28.5 bg-transparent mx-auto flex items-center justify-center border border-border rounded-full shadow-[0_0_24px_0_#4658727c]">
        <img
          src={`${props.icon}`}
          alt={`${props.iconName}`}
          className="w-16 h-16 object-contain"
        />
      </figure>
      <div className="mt-5 space-y-3">
        <h3 className="text-[22px] font-semibold text-white text-center">
          {props.title}
        </h3>
        <p className="text-base text-center text-description">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
