import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, fetchCategories } from "@/redux/appSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { FetchType } from "@/utils/constants";

type FetchTypeKeys = (typeof FetchType)[keyof typeof FetchType];

export const useFetchData = (type: FetchTypeKeys) => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: RootState) =>
    type === FetchType.QUESTIONS ? state.app.questions : state.app.categories
  );
  const loading = useSelector((state: RootState) => state.app.loading);
  const error = useSelector((state: RootState) => state.app.error);

  useEffect(() => {
    if (type === FetchType.QUESTIONS) {
      dispatch(fetchQuestions());
    } else {
      dispatch(fetchCategories());
    }
  }, [dispatch, type]);

  return { data, loading, error, refresh: () => dispatch(type === FetchType.QUESTIONS ? fetchQuestions() : fetchCategories()) };
};
