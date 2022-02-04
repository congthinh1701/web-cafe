import React from "react";

function Slider() {
  return (
    <div className="relative inset-0 ">

    <p c>dsadsad</p>
    {/* pannel */}
      <div className="absolute top-4 inset-y-0 right-10 max-w-md">
        <header className="border">
          <div>
            <h2>New Project</h2>
            <span>
              <button aria-label="Close panel">
                <p className="h-6 w-6">toggle</p>
              </button>
            </span>
          </div>
        </header>
      </div>

    </div>
  );
}

export default Slider;
