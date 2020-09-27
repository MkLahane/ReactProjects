import React from 'react';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useInterval } from '../Helper';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import { SentimentSatisfied } from '@material-ui/icons';
// import './Editor.css';

const useStyles = makeStyles(styles);

function Editor(props) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [id, setId] = useState('');
    const classes = useStyles();
    const [typing, setTyping] = useState(false);
    const [timeOnTyping, setTimeOnTyping] = useState(0);
    const delay = 2000;
    useInterval(() => {
        let timeNow = new Date().getTime();
        if ((timeNow - timeOnTyping) >= delay) {
            props.noteUpdate(text, props.selectedNote);
            setTyping(false);
        }
    }, (typing) ? delay : null);

    useEffect(() => {
        setText(props.text);
        return () => {
            setText('');
        }
    }, [props.selectedNote]);

    const update = val => {
        setTyping(true);
        setTimeOnTyping(new Date().getTime());
    };
    const updateBody = async (val) => {
        await setText(val);

        update();
    };
    return (
        <div className={classes.editorContainer}>
            <ReactQuill value={text} onChange={(val) => { updateBody(val) }}></ReactQuill>
        </div >
    );
}

export default Editor; 