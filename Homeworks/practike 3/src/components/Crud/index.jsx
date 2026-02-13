import React, { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import {
  Container, Header, AddBtn, FormWrapper, Input, Select,
  ButtonGroup, CancelBtn, SaveBtn, Table, Actions, IconBtn
} from "./styled";
import studentsMock from "../../mock/crud";

const Students = () => {
  const [students, setStudents] = useState(studentsMock);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const initialForm = {
    name: "",
    sana: "",
    phone: "",
    teacher: "Azimov Foziljon",
    course: "Frontend",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "sana" && value && isNaN(value)) return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.sana) return;

    if (editingId) {
      setStudents((prev) =>
        prev.map((s) => (s.id === editingId ? { ...s, ...form } : s))
      );
    } else {
      setStudents((prev) => [...prev, { ...form, id: Date.now() }]);
    }

    resetForm();
  };

  const handleEdit = (student) => {
    setForm(student);
    setEditingId(student.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <Container>
      <Header>
        <h2>Talabalar ro‘yxati</h2>
        <AddBtn onClick={() => setShowForm(!showForm)}>+ Talaba qo‘shish</AddBtn>
      </Header>

      {showForm && (
        <FormWrapper>
          <Input
            name="name"
            placeholder="Ism"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            name="phone"
            placeholder="Telefon"
            value={form.phone}
            onChange={handleChange}
          />
          <Input
            name="sana"
            type="number"
            placeholder="Sana"
            value={form.sana}
            onChange={handleChange}
          />
          <Select name="teacher" value={form.teacher} onChange={handleChange}>
            <option>Azimov Foziljon</option>
            <option>Tursunboyev Muhammadjon</option>
            <option>Donyor Umirzoqov</option>
          </Select>
          <Select name="course" value={form.course} onChange={handleChange}>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Mobile</option>
          </Select>
          <ButtonGroup>
            <CancelBtn onClick={resetForm}>Cancel</CancelBtn>
            <SaveBtn onClick={handleSubmit}>{editingId ? "Update" : "Save"}</SaveBtn>
          </ButtonGroup>
        </FormWrapper>
      )}
      <Table>
        <thead>
          <tr>
            <th>O'qituvchi ismi</th>
            <th>Sana</th>
            <th>Telefon</th>
            <th>O'qituvchi</th>
            <th>Kurs</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.sana}</td>
              <td>{s.phone}</td>
              <td>{s.teacher}</td>
              <td>{s.course}</td>
              <Actions>
                <IconBtn $edit onClick={() => handleEdit(s)}>
                  <FiEdit2 size={16} />
                </IconBtn>
                <IconBtn onClick={() => handleDelete(s.id)}>
                  <FiTrash2 size={16} />
                </IconBtn>
              </Actions>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Students;
