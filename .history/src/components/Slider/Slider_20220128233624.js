import React from "react";

function Slider() {
  return (
    <div className="relative inset-0 ">

    {/* pannel */}
      <div className="absolute top-2 inset-y-0 right-10 max-w-md">
        <header className="border mt-2 bg-blue">
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
