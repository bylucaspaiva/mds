import { CardContent, CardDescription } from "./ui/card";

interface Props {
  url: string;
  description: string;
}

const ImageBlock = ({ url, description }: Props) => {
  return (
    <CardContent className="text-center">
      <div className="overflow-hidden rounded-md transform hover:scale-105 sm:hover:scale-105 transition-transform hover:my-4 shadow-lg">
        <img src={url} alt={description} />
      </div>
        <CardDescription>
          <h2 className="text-center">{description}</h2>
        </CardDescription>
    </CardContent>
  );
};

export default ImageBlock;
