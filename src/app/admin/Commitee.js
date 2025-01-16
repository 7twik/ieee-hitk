import React from 'react';

const Committee = () => {
    const [data, setData] = React.useState([]);
    const [name, setName] = React.useState("");
    const [post, setPost] = React.useState("");
    const [type, setType] = React.useState("Fac");
    const [image, setImage] = React.useState("");
    const [li, setLi] = React.useState("");
    const [gm, setGm] = React.useState("");
    const [tw, setTw] = React.useState("");
    const [status, setStatus] = React.useState("Cur");
    const [editMode, setEditMode] = React.useState(false);
    const [currentId, setCurrentId] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/com');
            const data = await res.json();
            setData(data.data);
        };
        fetchData();
    }, []);

    const handleChange = (e) => setName(e.target.value);
    const handleChange2 = (e) => setPost(e.target.value);
    const handleChange3 = (e) => setType(e.target.value);
    const handleChange4 = (e) => setImage(e.target.files[0]);
    const handleChange5 = (e) => setLi(e.target.value);
    const handleChange6 = (e) => setGm(e.target.value);
    const handleChange7 = (e) => setTw(e.target.value);
    const handleChange11 = (e) => setStatus(e.target.value);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "notepad");
        formData.append("cloud_name", "dcyfkgtgv");
        const res = await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload", {
            method: "post",
            body: formData
        });
        const file = await res.json();
        setImage(file.url);
        alert("Image Uploaded");
    };

    const handleDelete = (name) => {
        fetch('/api/com', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Name: name }),
        })
        .then(response => response.json())
        .then(() => {
            alert("Deleted. Please reload the page.");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const handleEdit = (item) => {
        setEditMode(true);
        setCurrentId(item._id);
        setName(item.Name);
        setPost(item.Post);
        setType(item.Type);
        setImage(item.Image);
        setLi(item.Li);
        setGm(item.Gm);
        setTw(item.Tw);
        setStatus(item.Status);
    };

    const handleSubmit = () => {
        const newData = {
            Name: name,
            Post: post,
            Type: type,
            Image: image,
            Li: li,
            Gm: gm,
            Tw: tw,
            Status: status
        };

        const url = editMode ? `/api/com` : '/api/com';
        const method = editMode ? 'PUT' : 'POST';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
        .then(response => response.json())
        .then(() => {
            alert(`${editMode ? 'Updated' : 'Submitted'}. Please reload the page.`);
            setEditMode(false);
            setCurrentId(null);
            setName("");
            setPost("");
            setType("Fac");
            setImage("");
            setLi("");
            setGm("");
            setTw("");
            setStatus("Cur");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="committee-container-123">
            <br />
            <p>Here is the Committee List:</p>
            <div className='table-container-122'>
                <table className="committee-table-123">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Post</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Image</th>
                            <th>Linkedin</th>
                            <th>Gmail</th>
                            <th>Twitter</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? data.map((item, key) => (
                            <tr key={key}>
                                <td>{item.Name}</td>
                                <td>{item.Post}</td>
                                <td>{item.Type}</td>
                                <td>{item.Status}</td>
                                <td><img style={{ width: "200px", height: "auto" }} src={item.Image} alt="not proper pic" /></td>
                                <td>{item.Li}</td>
                                <td>{item.Gm}</td>
                                <td>{item.Tw}</td>
                                <td>
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                    <button onClick={() => handleDelete(item.Name)}>Delete</button>
                                </td>
                            </tr>
                        )) : null}
                    </tbody>
                </table>
            </div>
            <div className="form-container-123">
                <label style={{ fontSize: "25px" }}>{editMode ? "Edit Committee Form" : "Add Committee Form"}</label>
                <div className='dflex123'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter Name" value={name} onChange={handleChange} />
                </div>
                <div className='dflex123'>
                    <label htmlFor="post">Post:</label>
                    <input type="text" id="post" name="post" placeholder="Enter Post" value={post} onChange={handleChange2} />
                </div>
                <div className='dflex123'>
                    <label htmlFor="type">Type:</label>
                    <select id="type" name="type" placeholder="Enter Type" value={type} onChange={handleChange3}>
                        <option value="Fac">Faculty</option>
                        <option value="Stu">Student</option>
                    </select>
                </div>
                <div className='dflex123'>
                    <label htmlFor="status">Status:</label>
                    <select id="status" name="status" placeholder="Enter Status" value={status} onChange={handleChange11}>
                        <option value="Cur">Current member</option>
                        <option value="Ex">Ex-member</option>
                    </select>
                </div>
                <div className='dflex123'>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" placeholder="Enter Image" onChange={handleChange4} />
                </div>
                <button onClick={handleUpload}>Upload</button>
                <div className='dflex123'>
                    <label htmlFor="linkedin">Linkedin:</label>
                    <input type="text" id="linkedin" name="linkedin" placeholder="Enter Linkedin" value={li} onChange={handleChange5} />
                </div>
                <div className='dflex123'>
                    <label htmlFor="gmail">Gmail:</label>
                    <input type="text" id="gmail" name="gmail" placeholder="Enter Gmail" value={gm} onChange={handleChange6} />
                </div>
                <div className='dflex123'>
                    <label htmlFor="twitter">Twitter:</label>
                    <input type="text" id="twitter" name="twitter" placeholder="Enter Twitter" value={tw} onChange={handleChange7} />
                </div>
                <button onClick={handleSubmit}>{editMode ? "Update" : "Submit"}</button>
            </div>
        </div>
    );
};

export default Committee;
