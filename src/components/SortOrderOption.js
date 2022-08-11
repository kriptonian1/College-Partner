const SortOrderOption = (props) => {
    return (
        <div className="flex flex-row gap-3">
            <input type='radio' name={props.name} value={props.value} id={props.id}/>
            <label className="text-gray-700" for={props.id}>{props.name}</label>
        </div>
    );
}

export default SortOrderOption;