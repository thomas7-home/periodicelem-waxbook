import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Cover } from "./Cover";
import { Page } from "../Page";

export const AlbumContainer = React.forwardRef(
  ({ page, user, pageData }, ref) => (
    <div className='container'>
      {page.length > 0 && (
        <HTMLFlipBook
          width={340}
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
              New Elements and Molecules released continually!
              <br></br>
              <a href='https://www.publish0x.com/periodic-table-of-elements-nft'>
                Visit Periodic Elements on publish0x
              </a>
            </p>
          </div>
        </HTMLFlipBook>
      )}
    </div>
  )
);
