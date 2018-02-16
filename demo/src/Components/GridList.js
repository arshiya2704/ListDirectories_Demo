import React, {Component} from 'react';

class GridList extends Component {

    render(){

        var fileStyle={
            float:'left',
            color: 'skyblue',
            marginRight: '10px',
            marginLeft: '10px',
            padding: '3px',
            fontSize: '20px'
        };

        var fileStyle1={
            float:'right',
            color: 'skyblue',
            marginRight: '10px',
            marginLeft: '10px',
            padding: '3px',
            fontSize: '20px'
        };

        var fileName={
            float: 'left',
            marginRight: '10px',
            marginLeft: '10px',
            padding: '5px'
        };

        const files= this.props.files;
        console.log(files);

        const fileList = files.map((file) =>
            (1)?
                (file.type ==='F') ?
                    <li key={file.name}>{
                        <div>
                            <span className="glyphicon glyphicon-file" aria-hidden="true"></span>
                            <p>{file.name}</p>
                        </div>}
                    </li>:
                    <li key={file.name}>{
                        <div>
                            <span className="glyphicon glyphicon-folder-close" aria-hidden="true" role="button" ></span>
                            <p>{file.name}</p>
                        </div>}</li>:
                file.file_type === '' ?
                    <div>
                    </div>:
                    <div></div>
        );

        {
            return(
                <div>
                    <ul>{fileList}</ul>
                </div>


            )

        }
    }


}


export default (GridList);