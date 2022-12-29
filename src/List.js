import React from "react";

export default function List( {data, handleDelete, handleEdit} ) {
  return (
    <div className="list-group">

      {/* Jika menggunakan map, state default harus object array */}
      {data.map((contact) => (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h1 className="mb-1">{contact.id}</h1>
              <h1 className="mb-1">{contact.name}</h1>
              <p className="mb-1">{contact.umur}</p>
              <div>
                <button onClick={() => handleEdit(contact.id)} className="btn btn-sm btn-link">Edit</button>
                <button onClick={() => handleDelete(contact.id)} className="btn btn-sm btn-link">Del</button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
