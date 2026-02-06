// // import * as Yup from 'yup'

// const subtypesWithCategories = [
//   'Non-silicates',
//   'Sedimentary',
//   'Magmatic',
// ] // Add all subtypes that have category options

// // export const validationSchema = Yup.object().shape({
// //   type: Yup.string().required('Type is required'),
// //   subtype: Yup.string().required('Subtype is required'),
// //   // category: Yup.string().when('subtype', {
// //   //   is: (subtype) =>
// //   //     subtypesWithCategories.includes(subtype),
// //   //   then: Yup.string().required(
// //   //     'Category is required when the subtype has categories',
// //   //   ),
// //   //   otherwise: Yup.string().notRequired(),
// //   // }),
// //   category : Yup.string().required('Category is required'),
// //   name: Yup.string().required('Name is required'),
// //   description: Yup.string().required(
// //     'Description is required',
// //   ),
// //   formule_chimique: Yup.string().required(
// //     'Chemical Formula is required',
// //   ),
// //   composition_chimique: Yup.string().required(
// //     'Chemical Composition is required',
// //   ),
// //   origine_geologique: Yup.string().required(
// //     'Geological Origin is required',
// //   ),
// // })

// import * as Yup from 'yup';

// export const validationSchema = Yup.object().shape({
//   type: Yup.string().required('Type is required'),
//   subtype: Yup.string().required('Subtype is required'),
//   // category: Yup.string().required('Category is required'),
//   category: Yup.string().when('subtype', {
//         is: ((subtype) => subtypesWithCategories[subtype]),
//         then: Yup.string().required(
//           'Category is required when the subtype has categories',
//         ),
//         otherwise: Yup.string().notRequired(),
//       }),
//   name: Yup.string().required('Name is required'),
//   description: Yup.string().required('Description is required'),
//   formule_chimique: Yup.string().required('Chemical Formula is required'),
//   composition_chimique: Yup.string().required('Chemical Composition is required'),
//   origine_geologique: Yup.string().required('Geological Origin is required'),
// });

import * as Yup from 'yup'

// Ensure subtypesWithCategories is defined and is an array

export const validationSchema = Yup.object().shape({
  type: Yup.string().required('Type is required'),
  subtype: Yup.string().required('Subtype is required'),
  name: Yup.string().required('Name is required'),
  description: Yup.string().required(
    'Description is required',
  ),
  formule_chimique: Yup.string().required(
    'Chemical Formula is required',
  ),
  composition_chimique: Yup.string().required(
    'Chemical Composition is required',
  ),
  origine_geologique: Yup.string().required(
    'Geological Origin is required',
  ),
  video: Yup.mixed().required(
    '3D Model File (GLB) is required',
  ),
  glb: Yup.mixed().required('Video File is required'),
})

export const validationUpdateSchema = Yup.object().shape({
  type: Yup.string().required('Type is required'),
  subtype: Yup.string().required('Subtype is required'),
  name: Yup.string().required('Name is required'),
  description: Yup.string().required(
    'Description is required',
  ),
  formule_chimique: Yup.string().required(
    'Chemical Formula is required',
  ),
  composition_chimique: Yup.string().required(
    'Chemical Composition is required',
  ),
  origine_geologique: Yup.string().required(
    'Geological Origin is required',
  ),

})
