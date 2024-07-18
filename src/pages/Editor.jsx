import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";

function Editor() {
  const [value, setValue] = useState("");
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [articleTitle, setArticleTitle] = useState("");

  useEffect(() => {
    // Load initial value from localStorage
    const savedValue = localStorage.getItem("editorValue");
    const savedTitle = localStorage.getItem("articleTitle");
    if (savedValue) {
      setValue(savedValue);
    }
    if (savedTitle) {
      setArticleTitle(savedTitle);
    }
  }, []);

  useEffect(() => {
    // Save the current value to localStorage on every change, if autosave is enabled
    if (autoSaveEnabled) {
      localStorage.setItem("editorValue", value);
      localStorage.setItem("articleTitle", articleTitle);
    }
  }, [value, articleTitle, autoSaveEnabled]);

  const toggleAutoSave = () => {
    setAutoSaveEnabled((prevState) => !prevState);
  };

  const handleReset = () => {
    // Clear the editor's value and the article title
    setValue("");
    setArticleTitle("");
    // Set the reset button's state to true
    setIsReset(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-full">
      <div className="flex flex-col w-1/2 gap-5">
        <h1 className="text-3xl font-black">Create Article</h1>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <label>Auto Save (Locally)</label>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={autoSaveEnabled}
                onChange={toggleAutoSave}
              />
              <label
                htmlFor="toggle"
                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full"
              onClick={handleReset}
            >
              Reset
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Submit for Review
            </button>
          </div>
        </div>
        <section className="w-full">
          <input
            type="text"
            placeholder="Article Title"
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
            className="article-title w-full px-4 py-2 border border-gray-300 focus:outline-none text-7xl font-black"
          />
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Add content here..."
          />
        </section>
      </div>
    </div>
  );
}

export default Editor;
