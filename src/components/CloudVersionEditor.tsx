import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function CloudVersionEditor() {
  const editorRef = useRef(null);

  return (
    <article style={{ width: "50%" }}>
      <h2>Cloud Version Editor</h2>

      <p>
        See TinyMCE documentation for cloud version{" "}
        <a
          href={"https://www.tiny.cloud/docs/tinymce/6/react-cloud/"}
          target="blank"
        >
          here
        </a>
        .
      </p>

      <Editor
        apiKey="your-api-key"
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
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
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
