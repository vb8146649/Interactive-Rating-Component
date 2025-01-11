import { useState } from "react";

function RatingForm({setNum}) {
  const buttons = { 
    1: ["peer-checked/rating1:bg-orange-500 peer-focus/rating1:border peer-checked/rating1:text-black","peer/rating1"],
    2: ["peer-checked/rating2:bg-orange-500 peer-focus/rating2:border peer-checked/rating2:text-black","peer/rating2"], 
    3: ["peer-checked/rating3:bg-orange-500 peer-focus/rating3:border peer-checked/rating3:text-black","peer/rating3"], 
    4: ["peer-checked/rating4:bg-orange-500 peer-focus/rating4:border peer-checked/rating4:text-black","peer/rating4"], 
    5: ["peer-checked/rating5:bg-orange-500 peer-focus/rating5:border peer-checked/rating5:text-black","peer/rating5"],
  };
  const [rating,setRating]=useState(null);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setNum(rating);
  };
  return (
    <form onSubmit={handleSubmit} action="/" method="get">
      <div
        aria-hidden="true"
        className="bg-[hsl(213,19%,18%)] w-12 h-12 rounded-full content-center"
      >
        <svg
          width={17}
          focusable="false"
          height={16}
          className="mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <h1 className="text-white text-2xl mt-4 font-semibold ">
        How did we do?
      </h1>
      <p className="mt-4">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mt-4">
        {Object.entries(buttons).map(function ([key,item]) {
          return (
            <>
              <input
                type="radio"
                id={"rating" + key}
                className={`${item[1]} appearance-none sr-only `}
                name="rating"
                defaultValue={key}
                required=""
                aria-required="true"
                onChange={(e)=>setRating(e.target.value)}
              />
              <label
                htmlFor={"rating" + key}
                className={`block w-12 h-12 rounded-full text-center content-center hover:bg-white hover:text-black ${item[0]} bg-[hsl(213,19%,18%)]`}
              >
                {key}
              </label>
            </>
          );
        })}
      </div>
      <button
        type="submit"
        className="bg-orange-500 mt-4 text-black w-full p-3 tracking-widest rounded-full font-bold "
      >
        SUBMIT
      </button>
    </form>
  );
}

export default RatingForm;
