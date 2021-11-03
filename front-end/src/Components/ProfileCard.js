import React from "react";

export default function ProfileCard({ userObj }) {
  debugger;
  return (
    <div>
      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="card p-4">
          <div class=" image d-flex flex-column justify-content-center align-items-center">
            <button class="btn btn-secondary">
              <img
                src={userObj.image}
                height="200"
                width="200"
                alt=""
              />
            </button>
            <span class="name mt-3">{userObj.username}</span>
            {/* <span class="idd">@Mearone</span> */}
            <div class="d-flex flex-row justify-content-center align-items-center gap-2">
              {/* <span class="idd1">Oxc4c16a645_b21a</span> */}
              <span>
                <i class="fa fa-copy"></i>
              </span>
            </div>
            {/* <div class="d-flex flex-row justify-content-center align-items-center mt-3">
              <span class="number">
                1069
                <span class="follow">Followers</span>
              </span>
            </div> */}
            <div class=" d-flex mt-2">
              <button class="btn1 btn-dark">Edit Profile</button>
            </div>
            <div class="text mt-3">
              <span>
                {userObj.description}
                {/* <br></br> Artist/ Creative Director by Day #NFT minting@ with
                FND night. */}
              </span>
            </div>
            <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              {" "}
              <span>
                <i class="fa fa-twitter">Twitter</i>
              </span>{" "}
              <span>
                <i class="fa fa-facebook-f">Facebook</i>
              </span>{" "}
              <span>
                <i class="fa fa-instagram">Instagram</i>
              </span>{" "}
              <span>
                <i class="fa fa-linkedin">linkedin</i>
              </span>{" "}
            </div>
            <div class=" px-2 rounded mt-4 date ">
              {" "}
              <span class="join">Joined May,2021</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
