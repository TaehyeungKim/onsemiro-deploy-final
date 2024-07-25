import { FloatingSection, SectionTitle } from "components/Floating";
import upload from "assets/icons/upload.png";
import IconImage from "components/IconImage";
import { useCallback, useRef, useState, useEffect } from "react";

import { signUpState } from "state/state";
import { useRecoilState } from "recoil";

export default function Photos() {
  const photoRef = useRef(null);
  const stdRef = useRef(null);

  const [signUpData, setSignUpData] = useRecoilState(signUpState);

  const [photo, setPhoto] = useState(signUpData.photo ?? null);
  const [std, setStd] = useState(signUpData.std ?? null);

  const openFileInput = useCallback(
    (fileRef) => {
      return (e) => fileRef.current?.click();
    },
    [photoRef, stdRef]
  );

  useEffect(() => {
    setSignUpData({ ...signUpData, std, photo });
  }, [std, photo]);

  return (
    <>
      <FloatingSection>
        <h5>사진과 성병 검사지를 업로드 해주세요.</h5>
      </FloatingSection>
      <FloatingSection>
        <div className="w-full">
          <SectionTitle>사진</SectionTitle>
          <p className="mt-3">사진은 매칭 수락 시에만 서로 볼 수 있어요.</p>
          <p className="mt-3">
            사진을 업로드하지 않을 수 있지만, 사진을 업로드하지 않으면 상대방의
            사진도 볼 수 없어요.
          </p>
          <p className="mt-3">사진은 반드시, 얼굴이 나온 사진이어야 해요!</p>
          <button
            className="flex items-center justify-center bg-input min-h-11 w-full mt-3 rounded-lg box-border p-2"
            onClick={openFileInput(photoRef)}
          >
            {!photo ? (
              <>
                <div className="w-9 mr-2">
                  <IconImage src={upload}></IconImage>
                </div>
                업로드하기
              </>
            ) : (
              <span className="break-all">{photo.name}</span>
            )}
          </button>
          <input
            type="file"
            hidden
            accept="image/*"
            ref={photoRef}
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
          />
        </div>
      </FloatingSection>
      <FloatingSection>
        <div className="w-full">
          <SectionTitle>성병 검사지</SectionTitle>
          <button
            className="flex items-center justify-center bg-input min-h-11 w-full mt-3 rounded-lg"
            onClick={openFileInput(stdRef)}
          >
            {!std ? (
              <>
                <div className="w-9 mr-2">
                  <IconImage src={upload}></IconImage>
                </div>
                업로드하기
              </>
            ) : (
              std.name
            )}
          </button>
          <input
            type="file"
            hidden
            accept="image/*"
            ref={stdRef}
            onChange={(e) => setStd(e.target.files[0])}
          />
        </div>
      </FloatingSection>
    </>
  );
}
