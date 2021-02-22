import React, { useState } from "react";

const encodeId = (value) => {
  return window.btoa(value);
};

const Form = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const userId = encodeId(email);
    const groupId = encodeId(company);

    await window.analytics.identify(userId, {
      name: name,
      email: email,
    });

    await window.analytics.group(groupId, { name: company });

    await window.analytics.track("finished_form_tutorial", {
      library: "React",
      level: "Beginner",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="surname">Company:</label>
      <input
        id="company"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
