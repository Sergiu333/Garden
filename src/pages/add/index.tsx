import React from "react"
import { useFormik } from "formik"
import {Header} from "@/components";

const Add = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            category: "",
            price:"",
            description:"",
            lemn_1:"",
            lemn_2:"",
            acoperis_1:"",
            acoperis_2:"",
            latimea:"",
            lungimea:"",
            multiFile: [],
        },
        onSubmit: async (values) => {

            const formData = new FormData()

            const data = {
                name: values.name,
                category: values.category,
                price: values.price,
                description: values.description,
                lemn: [{ lemn: values.lemn_1 }, { lemn: values.lemn_2 }],
                acoperis: [{ acoperis: values.acoperis_1 }, { acoperis: values.acoperis_2 }],
                latimea: values.latimea,
                lungimea: values.lungimea,
            }
            formData.append("data", JSON.stringify(data))

            //multiple-files
            for (let i = 0; i < values.multiFile.length; i++) {
                formData.append(`files.multi`, values.multiFile[i])
            }

            //for upload page
            const uploadData = new FormData()
            uploadData.append("files", values.multiFile[0])

            //update collection

            // simple create new collection with JSON
            const createArticle = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/produses`, {
                method: "POST",
                body: formData,
                headers: {},
            })
            const createRes = await createArticle.json()

            //upload file to uploads
            const uploadFile = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/upload`, {
                method: "POST",
                body: uploadData,
                headers: {},
            })
            const uploadRes = await uploadFile.json()
        },
    })
// @ts-ignore
    const onMultiFileChange = (e) => {
        const files = e.target.files
        formik.setFieldValue("multiFile", files)
    }

    return (
        <div>
            <Header/>
            <div className="pt-[150px] px-[20px] xs:px-[50px] md:px-[80px] lg:px-[150px]">
                <form onSubmit={formik.handleSubmit} className="text-red-800 flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <label htmlFor="price">price</label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="category">category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.category}
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="description">description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="lemn_1">lemn_1</label>
                        <input
                            id="lemn_1"
                            name="lemn_1"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lemn_1}
                            className="capitalize"
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="lemn_2">lemn_2</label>
                        <input
                            id="lemn_2"
                            name="lemn_2"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lemn_2}
                            className="capitalize"
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="acoperis_1">acoperis_1</label>
                        <input
                            id="acoperis_1"
                            name="acoperis_1"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.acoperis_1}
                            className="capitalize"
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="acoperis_2">acoperis_2</label>
                        <input
                            id="acoperis_2"
                            name="acoperis_2"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.acoperis_2}
                            className="capitalize"
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="latimea">latimea</label>
                        <input
                            id="latimea"
                            name="latimea"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.latimea}
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="lungimea">lungimea</label>
                        <input
                            id="lungimea"
                            name="lungimea"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lungimea}
                        />
                    </div>
                    <div className="flex flex-row gap-2">
                        <label htmlFor="multi-file">image</label>
                        <input
                            id="multi-file"
                            name="multi-file"
                            multiple
                            type="file"
                            onChange={onMultiFileChange}
                        />
                    </div>
                    <button  className="w-fit bg-red-800 p-4 m-2 text-white font-bold text-[25px]" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
