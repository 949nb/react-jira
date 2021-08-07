export const SearchPanel = ({ param, setParam, users }) => {
    return <form action="">
        <div>
            <input type="text" value={ param.name } onChange={ evt => setParam({
                ...param,
                name: evt.target.value
            }) }/>
            <select name="" id="" value={ param.personId } onChange={ evt => setParam({
                ...param,
                personId: evt.target.value
            }) }>
                {
                    users.map(user => <option key={ user.id } value={ user.id }>{ user.name }</option>)
                }
            </select>
        </div>
    </form>
}