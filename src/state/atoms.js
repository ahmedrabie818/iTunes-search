import { atom } from "recoil";

// الحالة الخاصة بنص البحث
export const searchTextState = atom({
  key: "searchTextState", // معرف فريد
  default: "", // القيمة الابتدائية
});

// الحالة الخاصة بنتائج البحث
export const searchResultsState = atom({
  key: "searchResultsState",
  default: [], // مصفوفة النتائج
});
