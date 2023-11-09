import React, { useState, useEffect } from "react";
import "braft-editor/dist/index.css";
import BraftEditor, {ImageControlType} from "braft-editor";

const maxFileSize = 10240000; //100 kb

const Default = ({ value = "", form,hi=350 }, props) => {
    const [state, seTstate] = useState(BraftEditor.createEditorState(value));

    const handleChange = (editorState) => {
        seTstate(editorState);

        form(editorState.toHTML())
        // const formData = form.getFieldsValue();
        // formData.description = editorState.toHTML();
        // form.setFieldsValue(formData);
    };

    const controls = [
        "undo",
        "redo",
        "separator",
        "font-size",
        "line-height",
        "letter-spacing",
        "separator",
        "text-color",
        "bold",
        "italic",
        "underline",
        "strike-through",
        "separator",
        "superscript",
        "subscript",
        "remove-styles",
        "emoji",
        "separator",
        "text-indent",
        "text-align",
        "separator",
        "headings",
        "list-ul",
        "list-ol",
        "blockquote",
        "code",
        "separator",
        "separator",
        "hr",
        "separator",
        "media",
        "separator",
        "clear",
    ];

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const customUpload = (props) => {
        const { file, success, error } = props;

        toBase64(file)
            .then((res) => {
                success({ url: res });
            })
            .catch((err) => {
                alert(" File upload failed");


            });
    };
    const imageControlsx = [
        'float-left',
        'float-right',
        'align-left',
        'align-center',
        'align-right',
        // Remove the 'link' control
        'size',
        'remove',
    ];
    const validateFn = (file) => {
        if (file.size > maxFileSize) {
            alert("File Should be less than 1 mb");
            return false;
        }
        return true;
    };

    return (
        <div className="w-full">
            <BraftEditor
                language="en"

                value={state}
                onChange={handleChange}
                // imageControls={imageControlsx}

                // media={{ uploadFn: customUpload, validateFn: validateFn }}
                className="h-10 w-full "
                contentStyle={{
                    height: hi,
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,.1)",
                }}
            />
        </div>
    );
};

export default Default;
