import { cn } from "../lib/utils";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEdgeStore } from "../lib/edgestore";
import { Skeleton } from "./ui/skeleton";

interface CoverProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({
  url,
  preview
}: CoverProps) => {
  const params = useParams();
  const { edgestore } = useEdgeStore();

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({
        url: url
      });
    }
  };

  return (
    <div className={cn(
      "relative w-full h-[35vh] group",
      !url && "h-[12vh]",
      url && "bg-muted"
    )}>
      {!!url && (
        <Image
          src={url}
          fill
          className="object-cover"
          alt="Cover"
        />
      )}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <button
            onClick={onRemove}
            className="text-muted-foreground text-xs hover:text-rose-500 p-1 rounded-md transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

Cover.Skeleton = function CoverSkeleton() {
  return (
    <Skeleton className="w-full h-[12vh]" />
  );
}; 