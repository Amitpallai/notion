import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import  {useTheme} from "next-themes";
 
export default function App() {
  const editor = useCreateBlockNote();
  const {resolvedTheme} = useTheme();
  return <BlockNoteView editor={editor} theme={resolvedTheme === "dark" ? "dark" : "light"} />;
}
 