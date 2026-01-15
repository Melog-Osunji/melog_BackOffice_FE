import { useState } from "react";
import SearchInput from "../shared/ui/SearchInput";
import SearchSelect from "../shared/ui/SearchSelect";

import chevronUp from "../assets/icons/ChevronUp.svg";
import check from "../assets/icons/CheckIcon.svg";
import CommonButton from "../shared/ui/CommonButton";

export default function AccountPage() {

  const [value, setValue] = useState("email");
  return (
    <>
    <h2>계정 관리</h2>
    {/* 공유컴포넌트 예시들입니다. 지우고 사용하시면 됩니다. */}
    <SearchInput placeholder="검색" />
    <SearchSelect
        options={[
            { label: "이름", value: "name" },
            { label: "이메일", value: "email" },
            { label: "이름 + 이메일", value: "name_email" },
        ]}
        size="lg"
        value={value}
        onChange={setValue}
        placeholder="검색"
        chevronUpIcon={chevronUp}
        chevronDownIcon={chevronUp}
        checkIcon={check}
    />
    <SearchSelect
        options={[
            { label: "이름", value: "name" },
            { label: "이메일", value: "email" },
            { label: "이름 + 이메일", value: "name_email" },
        ]}
        size="md"
        value={value}
        onChange={setValue}
        placeholder="검색"
        chevronUpIcon={chevronUp}
        chevronDownIcon={chevronUp}
        checkIcon={check}
    />
    <CommonButton label="공통 버튼" size="sm" variant="ghost"/>
    <CommonButton label="공통 버튼" size="sm" variant="default"/>
    <CommonButton label="공통 버튼" size="sm" variant="outline"/>
    <CommonButton label="공통 버튼" size="sm" variant="ghostGray"/>
    <CommonButton label="공통 버튼" size="lg" variant="ghost"/>
    </>
    );
}
