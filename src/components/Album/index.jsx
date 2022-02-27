import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Cover } from "./Cover";
import { Page } from "../Page";

export const AlbumContainer = React.forwardRef(
  ({ page, user, pageData }, ref) => (
    <div className='container'>
      {page.length > 0 && (
        <HTMLFlipBook
          width={386}
          height={500}
          maxHeight={550}
          showCover={true}
          ref={ref}
        >
          <div className='cover__green'>
            <Cover user={user} data={pageData} />
          </div>
          {page.map((item, index) => (
            <div className='cover__page' key={index}>
              {<Page page={item + 1} user={user.data} />}
            </div>
          ))}
          <div className='cover__page--final'>
            <p
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "15px",
              }}
              className='final--header'
            >

            </p>
          </div>
        </HTMLFlipBook>
      )}
    </div>
  )
);
