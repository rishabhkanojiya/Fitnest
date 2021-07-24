import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Exercise = {
  __typename?: "Exercise";
  id: Scalars["Float"];
  name: Scalars["String"];
  bodyPart: Scalars["String"];
  exerciseWorkId: Scalars["Float"];
  exerciseSets?: Maybe<Array<Set>>;
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type ExerciseInput = {
  exerciseWorkId: Scalars["Float"];
  name: Scalars["String"];
  bodyPart: Scalars["String"];
};

export type ExerciseList = {
  __typename?: "ExerciseList";
  id: Scalars["Float"];
  name: Scalars["String"];
  bodyPart: Scalars["String"];
  video: Scalars["String"];
};

export type FieldError = {
  __typename?: "FieldError";
  errCode: Scalars["String"];
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createExercise: Exercise;
  updateExercise: Exercise;
  deleteExercise: Scalars["Boolean"];
  createSet: Set;
  updateSet: Set;
  deleteSet: Scalars["Boolean"];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars["Boolean"];
  createWorkout: WorkOutRespone;
  updateWorkout: WorkOutRespone;
  deleteWorkout: Scalars["Boolean"];
};

export type MutationCreateExerciseArgs = {
  input: ExerciseInput;
};

export type MutationUpdateExerciseArgs = {
  bodyPart: Scalars["String"];
  name: Scalars["String"];
  id: Scalars["Int"];
};

export type MutationDeleteExerciseArgs = {
  id: Scalars["Int"];
};

export type MutationCreateSetArgs = {
  input: SetInput;
};

export type MutationUpdateSetArgs = {
  setType: Scalars["String"];
  reps: Scalars["Int"];
  weight: Scalars["Int"];
  setNo: Scalars["Int"];
  id: Scalars["Int"];
};

export type MutationDeleteSetArgs = {
  id: Scalars["Int"];
};

export type MutationRegisterArgs = {
  options: UsernamePassInput;
};

export type MutationLoginArgs = {
  password: Scalars["String"];
  usernameOrEmail: Scalars["String"];
};

export type MutationCreateWorkoutArgs = {
  input: WorkoutInput;
};

export type MutationUpdateWorkoutArgs = {
  title: Scalars["String"];
  id: Scalars["Int"];
};

export type MutationDeleteWorkoutArgs = {
  id: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  exercise?: Maybe<Exercise>;
  exercises?: Maybe<Array<Exercise>>;
  exercisesJson?: Maybe<Array<ExerciseList>>;
  workoutExercises?: Maybe<Array<Exercise>>;
  set?: Maybe<Set>;
  sets?: Maybe<Array<Set>>;
  exerciseSet?: Maybe<Array<Set>>;
  me?: Maybe<User>;
  allUser?: Maybe<Array<User>>;
  userWokouts?: Maybe<User>;
  workout?: Maybe<Workout>;
  workouts?: Maybe<Array<Workout>>;
  userWorkouts?: Maybe<Array<Workout>>;
  workoutCounts?: Maybe<Scalars["Float"]>;
};

export type QueryExerciseArgs = {
  id: Scalars["Int"];
};

export type QueryExercisesArgs = {
  limit: Scalars["Int"];
};

export type QueryExercisesJsonArgs = {
  limit: Scalars["Int"];
};

export type QueryWorkoutExercisesArgs = {
  id: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QuerySetArgs = {
  id: Scalars["Int"];
};

export type QuerySetsArgs = {
  limit: Scalars["Int"];
};

export type QueryExerciseSetArgs = {
  id: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryWorkoutArgs = {
  id: Scalars["Int"];
};

export type QueryWorkoutsArgs = {
  limit: Scalars["Int"];
};

export type QueryUserWorkoutsArgs = {
  id: Scalars["Int"];
  limit: Scalars["Int"];
};

export type QueryWorkoutCountsArgs = {
  id: Scalars["Int"];
};

export type Set = {
  __typename?: "Set";
  id: Scalars["Float"];
  exerciseId: Scalars["Float"];
  setNo: Scalars["Float"];
  weight: Scalars["Float"];
  reps: Scalars["Float"];
  setType: Scalars["String"];
  lastData: Scalars["String"];
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type SetInput = {
  exerciseId: Scalars["Float"];
  setNo: Scalars["Float"];
  weight: Scalars["Float"];
  reps: Scalars["Float"];
  setType: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["Float"];
  username: Scalars["String"];
  email: Scalars["String"];
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
  workouts: Array<Workout>;
};

export type UserResponse = {
  __typename?: "UserResponse";
  error?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePassInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type WorkOutRespone = {
  __typename?: "WorkOutRespone";
  error?: Maybe<Array<FieldError>>;
  workout?: Maybe<Workout>;
};

export type Workout = {
  __typename?: "Workout";
  id: Scalars["Int"];
  title: Scalars["String"];
  lastPerformed: Scalars["String"];
  workoutUserId: Scalars["Float"];
  workoutUser: User;
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
  workExercise: Array<Exercise>;
};

export type WorkoutInput = {
  title: Scalars["String"];
};

export type ExerciseFragFragment = { __typename?: "Exercise" } & Pick<
  Exercise,
  "id" | "name" | "bodyPart"
>;

export type UserWorkFragment = { __typename?: "Workout" } & Pick<
  Workout,
  "id" | "title" | "workoutUserId"
> & {
    workoutUser: { __typename?: "User" } & Pick<User, "username">;
    workExercise: Array<
      { __typename?: "Exercise" } & Pick<Exercise, "id" | "name"> & {
          exerciseSets?: Maybe<
            Array<
              { __typename?: "Set" } & Pick<
                Set,
                "id" | "setNo" | "setType" | "weight" | "reps"
              >
            >
          >;
        }
    >;
  };

export type CreateExerciseMutationVariables = Exact<{
  input: ExerciseInput;
}>;

export type CreateExerciseMutation = { __typename?: "Mutation" } & {
  createExercise: { __typename?: "Exercise" } & Pick<
    Exercise,
    "id" | "name" | "bodyPart" | "exerciseWorkId" | "createdAt" | "updatedAt"
  >;
};

export type CreateSetsMutationVariables = Exact<{
  input: SetInput;
}>;

export type CreateSetsMutation = { __typename?: "Mutation" } & {
  createSet: { __typename?: "Set" } & Pick<
    Set,
    "id" | "exerciseId" | "setNo" | "weight" | "reps"
  >;
};

export type CreateWorkoutMutationVariables = Exact<{
  input: WorkoutInput;
}>;

export type CreateWorkoutMutation = { __typename?: "Mutation" } & {
  createWorkout: { __typename?: "WorkOutRespone" } & {
    error?: Maybe<
      Array<
        { __typename?: "FieldError" } & Pick<FieldError, "errCode" | "message">
      >
    >;
    workout?: Maybe<
      { __typename?: "Workout" } & Pick<
        Workout,
        "id" | "title" | "workoutUserId"
      >
    >;
  };
};

export type DeleteWorkoutMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteWorkoutMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteWorkout"
>;

export type UpdateWorkoutMutationVariables = Exact<{
  id: Scalars["Int"];
  title: Scalars["String"];
}>;

export type UpdateWorkoutMutation = { __typename?: "Mutation" } & {
  updateWorkout: { __typename?: "WorkOutRespone" } & {
    error?: Maybe<
      Array<
        { __typename?: "FieldError" } & Pick<FieldError, "errCode" | "message">
      >
    >;
    workout?: Maybe<
      { __typename?: "Workout" } & Pick<
        Workout,
        "id" | "title" | "workoutUserId"
      >
    >;
  };
};

export type DeleteExerciseMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteExerciseMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteExercise"
>;

export type DeleteSetMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteSetMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteSet"
>;

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "UserResponse" } & {
    error?: Maybe<
      Array<
        { __typename?: "FieldError" } & Pick<FieldError, "errCode" | "message">
      >
    >;
    user?: Maybe<
      { __typename?: "User" } & Pick<User, "id" | "username" | "email">
    >;
  };
};

export type LogOutMutationVariables = Exact<{ [key: string]: never }>;

export type LogOutMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "logout"
>;

export type RegisterMutationVariables = Exact<{
  option: UsernamePassInput;
}>;

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "UserResponse" } & {
    error?: Maybe<
      Array<
        { __typename?: "FieldError" } & Pick<FieldError, "errCode" | "message">
      >
    >;
    user?: Maybe<
      { __typename?: "User" } & Pick<User, "id" | "username" | "email">
    >;
  };
};

export type UpdateExerciseMutationVariables = Exact<{
  id: Scalars["Int"];
  name: Scalars["String"];
  bodyPart: Scalars["String"];
}>;

export type UpdateExerciseMutation = { __typename?: "Mutation" } & {
  updateExercise: { __typename?: "Exercise" } & Pick<
    Exercise,
    "id" | "name" | "bodyPart" | "createdAt"
  >;
};

export type UpdateSetsMutationVariables = Exact<{
  id: Scalars["Int"];
  setNo: Scalars["Int"];
  weight: Scalars["Int"];
  reps: Scalars["Int"];
  setType: Scalars["String"];
}>;

export type UpdateSetsMutation = { __typename?: "Mutation" } & {
  updateSet: { __typename?: "Set" } & Pick<
    Set,
    "id" | "setNo" | "weight" | "reps" | "setType"
  >;
};

export type ExercisesQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type ExercisesQuery = { __typename?: "Query" } & {
  exercises?: Maybe<
    Array<
      { __typename?: "Exercise" } & Pick<
        Exercise,
        | "id"
        | "name"
        | "exerciseWorkId"
        | "bodyPart"
        | "createdAt"
        | "updatedAt"
      >
    >
  >;
};

export type WorkoutExercisesQueryVariables = Exact<{
  limit: Scalars["Int"];
  id: Scalars["Int"];
}>;

export type WorkoutExercisesQuery = { __typename?: "Query" } & {
  workoutExercises?: Maybe<
    Array<
      { __typename?: "Exercise" } & Pick<Exercise, "id" | "name" | "bodyPart">
    >
  >;
};

export type ExercisesJsonQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type ExercisesJsonQuery = { __typename?: "Query" } & {
  exercisesJson?: Maybe<
    Array<
      { __typename?: "ExerciseList" } & Pick<
        ExerciseList,
        "id" | "name" | "bodyPart" | "video"
      >
    >
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & {
  me?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "username" | "email">>;
};

export type SetsQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type SetsQuery = { __typename?: "Query" } & {
  sets?: Maybe<
    Array<
      { __typename?: "Set" } & Pick<
        Set,
        "id" | "exerciseId" | "setNo" | "weight"
      >
    >
  >;
};

export type ExerciseSetsQueryVariables = Exact<{
  limit: Scalars["Int"];
  id: Scalars["Int"];
}>;

export type ExerciseSetsQuery = { __typename?: "Query" } & {
  exerciseSet?: Maybe<
    Array<
      { __typename?: "Set" } & Pick<
        Set,
        "id" | "exerciseId" | "setNo" | "weight" | "reps"
      >
    >
  >;
};

export type UserWorkoutsQueryVariables = Exact<{
  limit: Scalars["Int"];
  id: Scalars["Int"];
}>;

export type UserWorkoutsQuery = { __typename?: "Query" } & {
  userWorkouts?: Maybe<
    Array<
      { __typename?: "Workout" } & Pick<
        Workout,
        "id" | "title" | "workoutUserId"
      > & {
          workoutUser: { __typename?: "User" } & Pick<User, "username">;
          workExercise: Array<
            { __typename?: "Exercise" } & Pick<Exercise, "id" | "name"> & {
                exerciseSets?: Maybe<
                  Array<
                    { __typename?: "Set" } & Pick<
                      Set,
                      "id" | "setNo" | "setType" | "weight" | "reps"
                    >
                  >
                >;
              }
          >;
        }
    >
  >;
};

export type UserWorkoutsCountsQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type UserWorkoutsCountsQuery = { __typename?: "Query" } & Pick<
  Query,
  "workoutCounts"
>;

export type WorkoutsQueryVariables = Exact<{
  limit: Scalars["Int"];
}>;

export type WorkoutsQuery = { __typename?: "Query" } & {
  workouts?: Maybe<
    Array<
      { __typename?: "Workout" } & Pick<
        Workout,
        "id" | "title" | "workoutUserId"
      > & {
          workoutUser: { __typename?: "User" } & Pick<User, "username">;
          workExercise: Array<
            { __typename?: "Exercise" } & Pick<Exercise, "name">
          >;
        }
    >
  >;
};

export const ExerciseFragFragmentDoc = gql`
  fragment ExerciseFrag on Exercise {
    id
    name
    bodyPart
  }
`;
export const UserWorkFragmentDoc = gql`
  fragment userWork on Workout {
    id
    title
    workoutUserId
    workoutUser {
      username
    }
    workExercise {
      id
      name
      exerciseSets {
        id
        setNo
        setType
        weight
        reps
      }
    }
  }
`;
export const CreateExerciseDocument = gql`
  mutation CreateExercise($input: ExerciseInput!) {
    createExercise(input: $input) {
      id
      name
      bodyPart
      exerciseWorkId
      createdAt
      updatedAt
    }
  }
`;
export type CreateExerciseMutationFn = Apollo.MutationFunction<
  CreateExerciseMutation,
  CreateExerciseMutationVariables
>;

/**
 * __useCreateExerciseMutation__
 *
 * To run a mutation, you first call `useCreateExerciseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExerciseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExerciseMutation, { data, loading, error }] = useCreateExerciseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExerciseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateExerciseMutation,
    CreateExerciseMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateExerciseMutation,
    CreateExerciseMutationVariables
  >(CreateExerciseDocument, options);
}
export type CreateExerciseMutationHookResult = ReturnType<
  typeof useCreateExerciseMutation
>;
export type CreateExerciseMutationResult =
  Apollo.MutationResult<CreateExerciseMutation>;
export type CreateExerciseMutationOptions = Apollo.BaseMutationOptions<
  CreateExerciseMutation,
  CreateExerciseMutationVariables
>;
export const CreateSetsDocument = gql`
  mutation CreateSets($input: SetInput!) {
    createSet(input: $input) {
      id
      exerciseId
      setNo
      weight
      reps
    }
  }
`;
export type CreateSetsMutationFn = Apollo.MutationFunction<
  CreateSetsMutation,
  CreateSetsMutationVariables
>;

/**
 * __useCreateSetsMutation__
 *
 * To run a mutation, you first call `useCreateSetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSetsMutation, { data, loading, error }] = useCreateSetsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSetsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSetsMutation,
    CreateSetsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateSetsMutation, CreateSetsMutationVariables>(
    CreateSetsDocument,
    options
  );
}
export type CreateSetsMutationHookResult = ReturnType<
  typeof useCreateSetsMutation
>;
export type CreateSetsMutationResult =
  Apollo.MutationResult<CreateSetsMutation>;
export type CreateSetsMutationOptions = Apollo.BaseMutationOptions<
  CreateSetsMutation,
  CreateSetsMutationVariables
>;
export const CreateWorkoutDocument = gql`
  mutation CreateWorkout($input: WorkoutInput!) {
    createWorkout(input: $input) {
      error {
        errCode
        message
      }
      workout {
        id
        title
        workoutUserId
      }
    }
  }
`;
export type CreateWorkoutMutationFn = Apollo.MutationFunction<
  CreateWorkoutMutation,
  CreateWorkoutMutationVariables
>;

/**
 * __useCreateWorkoutMutation__
 *
 * To run a mutation, you first call `useCreateWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkoutMutation, { data, loading, error }] = useCreateWorkoutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateWorkoutMutation,
    CreateWorkoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateWorkoutMutation,
    CreateWorkoutMutationVariables
  >(CreateWorkoutDocument, options);
}
export type CreateWorkoutMutationHookResult = ReturnType<
  typeof useCreateWorkoutMutation
>;
export type CreateWorkoutMutationResult =
  Apollo.MutationResult<CreateWorkoutMutation>;
export type CreateWorkoutMutationOptions = Apollo.BaseMutationOptions<
  CreateWorkoutMutation,
  CreateWorkoutMutationVariables
>;
export const DeleteWorkoutDocument = gql`
  mutation DeleteWorkout($id: Int!) {
    deleteWorkout(id: $id)
  }
`;
export type DeleteWorkoutMutationFn = Apollo.MutationFunction<
  DeleteWorkoutMutation,
  DeleteWorkoutMutationVariables
>;

/**
 * __useDeleteWorkoutMutation__
 *
 * To run a mutation, you first call `useDeleteWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkoutMutation, { data, loading, error }] = useDeleteWorkoutMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWorkoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteWorkoutMutation,
    DeleteWorkoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteWorkoutMutation,
    DeleteWorkoutMutationVariables
  >(DeleteWorkoutDocument, options);
}
export type DeleteWorkoutMutationHookResult = ReturnType<
  typeof useDeleteWorkoutMutation
>;
export type DeleteWorkoutMutationResult =
  Apollo.MutationResult<DeleteWorkoutMutation>;
export type DeleteWorkoutMutationOptions = Apollo.BaseMutationOptions<
  DeleteWorkoutMutation,
  DeleteWorkoutMutationVariables
>;
export const UpdateWorkoutDocument = gql`
  mutation UpdateWorkout($id: Int!, $title: String!) {
    updateWorkout(id: $id, title: $title) {
      error {
        errCode
        message
      }
      workout {
        id
        title
        workoutUserId
      }
    }
  }
`;
export type UpdateWorkoutMutationFn = Apollo.MutationFunction<
  UpdateWorkoutMutation,
  UpdateWorkoutMutationVariables
>;

/**
 * __useUpdateWorkoutMutation__
 *
 * To run a mutation, you first call `useUpdateWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkoutMutation, { data, loading, error }] = useUpdateWorkoutMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateWorkoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateWorkoutMutation,
    UpdateWorkoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateWorkoutMutation,
    UpdateWorkoutMutationVariables
  >(UpdateWorkoutDocument, options);
}
export type UpdateWorkoutMutationHookResult = ReturnType<
  typeof useUpdateWorkoutMutation
>;
export type UpdateWorkoutMutationResult =
  Apollo.MutationResult<UpdateWorkoutMutation>;
export type UpdateWorkoutMutationOptions = Apollo.BaseMutationOptions<
  UpdateWorkoutMutation,
  UpdateWorkoutMutationVariables
>;
export const DeleteExerciseDocument = gql`
  mutation DeleteExercise($id: Int!) {
    deleteExercise(id: $id)
  }
`;
export type DeleteExerciseMutationFn = Apollo.MutationFunction<
  DeleteExerciseMutation,
  DeleteExerciseMutationVariables
>;

/**
 * __useDeleteExerciseMutation__
 *
 * To run a mutation, you first call `useDeleteExerciseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExerciseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExerciseMutation, { data, loading, error }] = useDeleteExerciseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExerciseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteExerciseMutation,
    DeleteExerciseMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteExerciseMutation,
    DeleteExerciseMutationVariables
  >(DeleteExerciseDocument, options);
}
export type DeleteExerciseMutationHookResult = ReturnType<
  typeof useDeleteExerciseMutation
>;
export type DeleteExerciseMutationResult =
  Apollo.MutationResult<DeleteExerciseMutation>;
export type DeleteExerciseMutationOptions = Apollo.BaseMutationOptions<
  DeleteExerciseMutation,
  DeleteExerciseMutationVariables
>;
export const DeleteSetDocument = gql`
  mutation deleteSet($id: Int!) {
    deleteSet(id: $id)
  }
`;
export type DeleteSetMutationFn = Apollo.MutationFunction<
  DeleteSetMutation,
  DeleteSetMutationVariables
>;

/**
 * __useDeleteSetMutation__
 *
 * To run a mutation, you first call `useDeleteSetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSetMutation, { data, loading, error }] = useDeleteSetMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteSetMutation,
    DeleteSetMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteSetMutation, DeleteSetMutationVariables>(
    DeleteSetDocument,
    options
  );
}
export type DeleteSetMutationHookResult = ReturnType<
  typeof useDeleteSetMutation
>;
export type DeleteSetMutationResult = Apollo.MutationResult<DeleteSetMutation>;
export type DeleteSetMutationOptions = Apollo.BaseMutationOptions<
  DeleteSetMutation,
  DeleteSetMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($usernameOrEmail: String!, $password: String!) {
    login(usernameOrEmail: $usernameOrEmail, password: $password) {
      error {
        errCode
        message
      }
      user {
        id
        username
        email
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogOutDocument = gql`
  mutation LogOut {
    logout
  }
`;
export type LogOutMutationFn = Apollo.MutationFunction<
  LogOutMutation,
  LogOutMutationVariables
>;

/**
 * __useLogOutMutation__
 *
 * To run a mutation, you first call `useLogOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutMutation, { data, loading, error }] = useLogOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogOutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogOutMutation,
    LogOutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogOutMutation, LogOutMutationVariables>(
    LogOutDocument,
    options
  );
}
export type LogOutMutationHookResult = ReturnType<typeof useLogOutMutation>;
export type LogOutMutationResult = Apollo.MutationResult<LogOutMutation>;
export type LogOutMutationOptions = Apollo.BaseMutationOptions<
  LogOutMutation,
  LogOutMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($option: UsernamePassInput!) {
    register(options: $option) {
      error {
        errCode
        message
      }
      user {
        id
        username
        email
      }
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      option: // value for 'option'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const UpdateExerciseDocument = gql`
  mutation UpdateExercise($id: Int!, $name: String!, $bodyPart: String!) {
    updateExercise(id: $id, name: $name, bodyPart: $bodyPart) {
      id
      name
      bodyPart
      createdAt
    }
  }
`;
export type UpdateExerciseMutationFn = Apollo.MutationFunction<
  UpdateExerciseMutation,
  UpdateExerciseMutationVariables
>;

/**
 * __useUpdateExerciseMutation__
 *
 * To run a mutation, you first call `useUpdateExerciseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExerciseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExerciseMutation, { data, loading, error }] = useUpdateExerciseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      bodyPart: // value for 'bodyPart'
 *   },
 * });
 */
export function useUpdateExerciseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateExerciseMutation,
    UpdateExerciseMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateExerciseMutation,
    UpdateExerciseMutationVariables
  >(UpdateExerciseDocument, options);
}
export type UpdateExerciseMutationHookResult = ReturnType<
  typeof useUpdateExerciseMutation
>;
export type UpdateExerciseMutationResult =
  Apollo.MutationResult<UpdateExerciseMutation>;
export type UpdateExerciseMutationOptions = Apollo.BaseMutationOptions<
  UpdateExerciseMutation,
  UpdateExerciseMutationVariables
>;
export const UpdateSetsDocument = gql`
  mutation UpdateSets(
    $id: Int!
    $setNo: Int!
    $weight: Int!
    $reps: Int!
    $setType: String!
  ) {
    updateSet(
      id: $id
      setNo: $setNo
      weight: $weight
      reps: $reps
      setType: $setType
    ) {
      id
      setNo
      weight
      reps
      setType
    }
  }
`;
export type UpdateSetsMutationFn = Apollo.MutationFunction<
  UpdateSetsMutation,
  UpdateSetsMutationVariables
>;

/**
 * __useUpdateSetsMutation__
 *
 * To run a mutation, you first call `useUpdateSetsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSetsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSetsMutation, { data, loading, error }] = useUpdateSetsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      setNo: // value for 'setNo'
 *      weight: // value for 'weight'
 *      reps: // value for 'reps'
 *      setType: // value for 'setType'
 *   },
 * });
 */
export function useUpdateSetsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSetsMutation,
    UpdateSetsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateSetsMutation, UpdateSetsMutationVariables>(
    UpdateSetsDocument,
    options
  );
}
export type UpdateSetsMutationHookResult = ReturnType<
  typeof useUpdateSetsMutation
>;
export type UpdateSetsMutationResult =
  Apollo.MutationResult<UpdateSetsMutation>;
export type UpdateSetsMutationOptions = Apollo.BaseMutationOptions<
  UpdateSetsMutation,
  UpdateSetsMutationVariables
>;
export const ExercisesDocument = gql`
  query Exercises($limit: Int!) {
    exercises(limit: $limit) {
      id
      name
      exerciseWorkId
      bodyPart
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useExercisesQuery__
 *
 * To run a query within a React component, call `useExercisesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExercisesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExercisesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useExercisesQuery(
  baseOptions: Apollo.QueryHookOptions<ExercisesQuery, ExercisesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExercisesQuery, ExercisesQueryVariables>(
    ExercisesDocument,
    options
  );
}
export function useExercisesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExercisesQuery,
    ExercisesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExercisesQuery, ExercisesQueryVariables>(
    ExercisesDocument,
    options
  );
}
export type ExercisesQueryHookResult = ReturnType<typeof useExercisesQuery>;
export type ExercisesLazyQueryHookResult = ReturnType<
  typeof useExercisesLazyQuery
>;
export type ExercisesQueryResult = Apollo.QueryResult<
  ExercisesQuery,
  ExercisesQueryVariables
>;
export const WorkoutExercisesDocument = gql`
  query WorkoutExercises($limit: Int!, $id: Int!) {
    workoutExercises(limit: $limit, id: $id) {
      id
      name
      bodyPart
    }
  }
`;

/**
 * __useWorkoutExercisesQuery__
 *
 * To run a query within a React component, call `useWorkoutExercisesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkoutExercisesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkoutExercisesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWorkoutExercisesQuery(
  baseOptions: Apollo.QueryHookOptions<
    WorkoutExercisesQuery,
    WorkoutExercisesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WorkoutExercisesQuery, WorkoutExercisesQueryVariables>(
    WorkoutExercisesDocument,
    options
  );
}
export function useWorkoutExercisesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WorkoutExercisesQuery,
    WorkoutExercisesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    WorkoutExercisesQuery,
    WorkoutExercisesQueryVariables
  >(WorkoutExercisesDocument, options);
}
export type WorkoutExercisesQueryHookResult = ReturnType<
  typeof useWorkoutExercisesQuery
>;
export type WorkoutExercisesLazyQueryHookResult = ReturnType<
  typeof useWorkoutExercisesLazyQuery
>;
export type WorkoutExercisesQueryResult = Apollo.QueryResult<
  WorkoutExercisesQuery,
  WorkoutExercisesQueryVariables
>;
export const ExercisesJsonDocument = gql`
  query ExercisesJson($limit: Int!) {
    exercisesJson(limit: $limit) {
      id
      name
      bodyPart
      video
    }
  }
`;

/**
 * __useExercisesJsonQuery__
 *
 * To run a query within a React component, call `useExercisesJsonQuery` and pass it any options that fit your needs.
 * When your component renders, `useExercisesJsonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExercisesJsonQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useExercisesJsonQuery(
  baseOptions: Apollo.QueryHookOptions<
    ExercisesJsonQuery,
    ExercisesJsonQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExercisesJsonQuery, ExercisesJsonQueryVariables>(
    ExercisesJsonDocument,
    options
  );
}
export function useExercisesJsonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExercisesJsonQuery,
    ExercisesJsonQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExercisesJsonQuery, ExercisesJsonQueryVariables>(
    ExercisesJsonDocument,
    options
  );
}
export type ExercisesJsonQueryHookResult = ReturnType<
  typeof useExercisesJsonQuery
>;
export type ExercisesJsonLazyQueryHookResult = ReturnType<
  typeof useExercisesJsonLazyQuery
>;
export type ExercisesJsonQueryResult = Apollo.QueryResult<
  ExercisesJsonQuery,
  ExercisesJsonQueryVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      username
      email
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SetsDocument = gql`
  query Sets($limit: Int!) {
    sets(limit: $limit) {
      id
      exerciseId
      setNo
      weight
    }
  }
`;

/**
 * __useSetsQuery__
 *
 * To run a query within a React component, call `useSetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSetsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSetsQuery(
  baseOptions: Apollo.QueryHookOptions<SetsQuery, SetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SetsQuery, SetsQueryVariables>(SetsDocument, options);
}
export function useSetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SetsQuery, SetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SetsQuery, SetsQueryVariables>(
    SetsDocument,
    options
  );
}
export type SetsQueryHookResult = ReturnType<typeof useSetsQuery>;
export type SetsLazyQueryHookResult = ReturnType<typeof useSetsLazyQuery>;
export type SetsQueryResult = Apollo.QueryResult<SetsQuery, SetsQueryVariables>;
export const ExerciseSetsDocument = gql`
  query exerciseSets($limit: Int!, $id: Int!) {
    exerciseSet(limit: $limit, id: $id) {
      id
      exerciseId
      setNo
      weight
      reps
    }
  }
`;

/**
 * __useExerciseSetsQuery__
 *
 * To run a query within a React component, call `useExerciseSetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExerciseSetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExerciseSetsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useExerciseSetsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ExerciseSetsQuery,
    ExerciseSetsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ExerciseSetsQuery, ExerciseSetsQueryVariables>(
    ExerciseSetsDocument,
    options
  );
}
export function useExerciseSetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ExerciseSetsQuery,
    ExerciseSetsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ExerciseSetsQuery, ExerciseSetsQueryVariables>(
    ExerciseSetsDocument,
    options
  );
}
export type ExerciseSetsQueryHookResult = ReturnType<
  typeof useExerciseSetsQuery
>;
export type ExerciseSetsLazyQueryHookResult = ReturnType<
  typeof useExerciseSetsLazyQuery
>;
export type ExerciseSetsQueryResult = Apollo.QueryResult<
  ExerciseSetsQuery,
  ExerciseSetsQueryVariables
>;
export const UserWorkoutsDocument = gql`
  query UserWorkouts($limit: Int!, $id: Int!) {
    userWorkouts(limit: $limit, id: $id) {
      id
      title
      workoutUserId
      workoutUser {
        username
      }
      workExercise {
        id
        name
        exerciseSets {
          id
          setNo
          setType
          weight
          reps
        }
      }
    }
  }
`;

/**
 * __useUserWorkoutsQuery__
 *
 * To run a query within a React component, call `useUserWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWorkoutsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserWorkoutsQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserWorkoutsQuery,
    UserWorkoutsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserWorkoutsQuery, UserWorkoutsQueryVariables>(
    UserWorkoutsDocument,
    options
  );
}
export function useUserWorkoutsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserWorkoutsQuery,
    UserWorkoutsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserWorkoutsQuery, UserWorkoutsQueryVariables>(
    UserWorkoutsDocument,
    options
  );
}
export type UserWorkoutsQueryHookResult = ReturnType<
  typeof useUserWorkoutsQuery
>;
export type UserWorkoutsLazyQueryHookResult = ReturnType<
  typeof useUserWorkoutsLazyQuery
>;
export type UserWorkoutsQueryResult = Apollo.QueryResult<
  UserWorkoutsQuery,
  UserWorkoutsQueryVariables
>;
export const UserWorkoutsCountsDocument = gql`
  query UserWorkoutsCounts($id: Int!) {
    workoutCounts(id: $id)
  }
`;

/**
 * __useUserWorkoutsCountsQuery__
 *
 * To run a query within a React component, call `useUserWorkoutsCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWorkoutsCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWorkoutsCountsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserWorkoutsCountsQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserWorkoutsCountsQuery,
    UserWorkoutsCountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    UserWorkoutsCountsQuery,
    UserWorkoutsCountsQueryVariables
  >(UserWorkoutsCountsDocument, options);
}
export function useUserWorkoutsCountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserWorkoutsCountsQuery,
    UserWorkoutsCountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    UserWorkoutsCountsQuery,
    UserWorkoutsCountsQueryVariables
  >(UserWorkoutsCountsDocument, options);
}
export type UserWorkoutsCountsQueryHookResult = ReturnType<
  typeof useUserWorkoutsCountsQuery
>;
export type UserWorkoutsCountsLazyQueryHookResult = ReturnType<
  typeof useUserWorkoutsCountsLazyQuery
>;
export type UserWorkoutsCountsQueryResult = Apollo.QueryResult<
  UserWorkoutsCountsQuery,
  UserWorkoutsCountsQueryVariables
>;
export const WorkoutsDocument = gql`
  query Workouts($limit: Int!) {
    workouts(limit: $limit) {
      id
      title
      workoutUserId
      workoutUser {
        username
      }
      workExercise {
        name
      }
    }
  }
`;

/**
 * __useWorkoutsQuery__
 *
 * To run a query within a React component, call `useWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkoutsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useWorkoutsQuery(
  baseOptions: Apollo.QueryHookOptions<WorkoutsQuery, WorkoutsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WorkoutsQuery, WorkoutsQueryVariables>(
    WorkoutsDocument,
    options
  );
}
export function useWorkoutsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WorkoutsQuery,
    WorkoutsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WorkoutsQuery, WorkoutsQueryVariables>(
    WorkoutsDocument,
    options
  );
}
export type WorkoutsQueryHookResult = ReturnType<typeof useWorkoutsQuery>;
export type WorkoutsLazyQueryHookResult = ReturnType<
  typeof useWorkoutsLazyQuery
>;
export type WorkoutsQueryResult = Apollo.QueryResult<
  WorkoutsQuery,
  WorkoutsQueryVariables
>;
