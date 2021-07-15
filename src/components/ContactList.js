import './ContactList.css'

function ContactList(props){

    return(
        <div><table className="contacts form">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                {props.contacts.map((contact, i) => {
            return <tbody>
                <tr>
                    <td>{contact.name}</td>
                    <td>{contact.tel}</td>
                    <td>{contact.email}</td>
                    <td>
                        <button onClick={() => props.deleteContact(i)}>X</button>
                    </td>
                </tr>
            </tbody>
                
                })}

            </table>
            
 
        </div>
    )
}

export default ContactList