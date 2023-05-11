import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function SelfHostedVersionEditor() {
  const editorRef = useRef(null);

  return (
    <article style={{ width: "50%" }}>
      <h2>Self-hosted Version Editor</h2>

      <p>
        See TinyMCE documentation for self-hosted version{" "}
        <a
          href={"https://www.tiny.cloud/docs/tinymce/6/react-pm-host/"}
          target="blank"
        >
          here
        </a>
        .
      </p>

      <Editor
        tinymceScriptSrc={"http://localhost:5173/tinymce/tinymce.min.js"}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </article>
  );
}
