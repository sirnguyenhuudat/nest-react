import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import {IRootState} from "../shared";

type IMember = StateProps & DispatchProps & {

}

function MemberComponent(props: IMember) {
    const [listMember, setListMember] = useState([]);

    useEffect(() => {
        setListMember([]);
    }, [])

    return (<>
        MEMBER LIST -
        { props.action }
    </>)
}

const mapStateToProps = ({ memberData }: IRootState, ownProps: any) => ({
    action: memberData.action
})

const mapDispatchToProps = {

}

type StateProps = ReturnType <typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(MemberComponent);