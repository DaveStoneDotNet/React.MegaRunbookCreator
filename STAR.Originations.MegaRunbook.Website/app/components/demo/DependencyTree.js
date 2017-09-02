import React                  from 'react';
import PropTypes              from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { browserHistory }     from 'react-router';

import toastr                 from 'toastr';
import { Button }             from 'react-bootstrap';
import { Modal }              from 'react-bootstrap';
import Tree                   from 'react-tree-graph';


import clone                  from 'clone';
import { hierarchy }          from 'd3-hierarchy';

import * as appActions        from '../../state/actions/appActions';

class DependencyTree extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
                        data: getJsonData()
                     };

        toastr.options.positionClass = 'toast-bottom-right';

        this.nodeClickHandler = this.nodeClickHandler.bind(this);
        this.linkClickHandler = this.linkClickHandler.bind(this);
        this.treeClickHandler = this.treeClickHandler.bind(this);
        this.getChildren      = this.getChildren.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {

        const self = this;
    }

    componentWillUnmount() {
    }

    getChildren(n) {
        // Maybe...
        // https://github.com/bkrem/react-d3-tree/blob/master/src/Tree/index.js
        console.log('GET CHILDREN', n);
        return n.children;
    }

    nodeClickHandler(nodeKey, event) {
        console.log('NODE CLICK HANDLER - NODE KEY', nodeKey);
        console.log('NODE CLICK HANDLER - EVENT', event);
        const data = clone(this.state.data);
    }

    linkClickHandler(sourceKey, targetKey, event) {
        console.log('LINK CLICK HANDLER - SOURCE KEY', sourceKey);
        console.log('LINK CLICK HANDLER - TARGET KEY', targetKey);
        console.log('LINK CLICK HANDLER - EVENT', event);
    }

    treeClickHandler(event) {
        //console.log('TREE CLICK HANDLER - EVENT', event);
    }

    render() {

        const data             = this.state.data;
        const nodeClickHandler = this.nodeClickHandler;
        const linkClickHandler = this.linkClickHandler;
        const treeClickHandler = this.treeClickHandler;
        const getChildren      = this.getChildren;

        return (
                   <div>
                        <h1>Dependency Tree</h1>
                        <div className="custom-container">
                            <Tree data             = {data} 
                                  width            = {1800} 
                                  height           = {800} 
                                  animated         = {true} 
                                  treeClassName    = "custom" 
                                  keyProp          = "ID" 
                                  nodeClickHandler = {nodeClickHandler} 
                                  linkClickHandler = {linkClickHandler} 
                                  treeClickHandler = {treeClickHandler} 
                                  getChildren      = {getChildren}
                            />
                        </div>
                   </div>
               );
    }
}


const getJsonData = () => {
    return {
        "ID":       "33EF7362-2FB8-96EF-2A7A-5A9EAB442172", 
        "name":     "cma",
        "children": [
                        {
                            "ID":       "421D6B39-24A9-7683-9F97-591650C13469", 
                            "name":     "ui",
                            "children": [
                                            {
                                                "ID":       "B6340CDC-51B8-933E-7E03-0F2CA2789E84", 
                                                "name":     "web", 
                                                "children": [
                                                                {
                                                                    "ID":       "022D72AB-48AC-60AC-8E4D-9785C0BE3DB5", 
                                                                    "name":     "capital market contracts",
                                                                    "children": [
                                                                                    {
                                                                                        "ID":       "AA050040-8EFB-819F-9E02-3B43E6DE32DD", 
                                                                                        "name": 	"ods contracts"
                                                                                    }
                                                                    ]
                                                                }
                                                ]
                                            }, 
                                            {
                                                "ID":       "3F5C0AD8-51A0-7659-89A2-EDAD11610E1D", 
                                                "name":     "import", 
                                                "children": [
                                                                {
                                                                    "ID":       "0FC40574-102F-6622-70ED-3052F4BE3AD1", 
                                                                    "name":     "capital market contracts",
                                                                    "children": [
                                                                                    {
                                                                                        "ID":       "39D03315-419A-3DCA-3E33-EC0964455CBF", 
                                                                                        "name": 	"ods contracts"
                                                                                    }
                                                                    ]
                                                                }
                                                ]
                                            }
                            ]
                        },
                        {
                            "ID":       "8DAC0883-3040-51A8-18EA-4A3FE26592DC", 
                            "name":     "wcf",
                            "children": [
                                            {
                                                "ID":       "D3B2469C-3670-554E-95C6-A9B09A9D0916", 
                                                "name":     "services",
                                                "children": [
                                                                {
                                                                    "ID":       "C9300116-68C9-9E9A-2611-C16B10CB262B", 
                                                                    "name":     "business", 
                                                                    "children": [
                                                                                    {
                                                                                        "ID":       "ABEB5C1D-7F8F-05BB-84B1-8419573F7E69", 
                                                                                        "name":     "data access",
                                                                                        "children":[
                                                                                                        {
                                                                                                            "ID":       "ED2BA17A-3E95-3535-1C92-2F9011DD479F", 
                                                                                                            "name":     "capital market contracts", 
                                                                                                            "children": [
                                                                                                                            {
                                                                                                                                "ID":   "2671654A-6554-5E3F-45DD-EC1394E1981D", 
                                                                                                                                "name": "ods contracts"
                                                                                                                            }
                                                                                                            ] 
                                                                                                        }, 
                                                                                                        {
                                                                                                            "ID":       "BE1A1272-8ABB-6395-7CD1-4947A7AB6F04", 
                                                                                                            "name":     "ods contracts"
                                                                                                        }, 
                                                                                                        {
                                                                                                            "ID":       "EBDF2037-6614-20A1-20ED-2BB543144CD8", 
                                                                                                            "name":     "delivery review contracts"
                                                                                                        }
                                                                                        ] 
                                                                                    }, 
                                                                                    {
                                                                                        "ID":       "CED1EABD-6B7F-5755-5BA7-920B6339530C", 
                                                                                        "name":     "assignment letters", 
                                                                                        "children": [
                                                                                                        {
                                                                                                            "ID":       "0F396CE6-2A1C-506B-4502-5D6CABAC83CF", 
                                                                                                            "name":     "capital market contracts",
                                                                                                            "children": [
                                                                                                                            {
                                                                                                                                "ID":       "46B2360B-1699-7678-4E2F-57A0DF531BB5", 
                                                                                                                                "name": 	"ods contracts"
                                                                                                                            }
                                                                                                            ] 
                                                                                                        }, 
                                                                                                        {
                                                                                                            "ID":       "72AA737F-8217-0E60-803A-117DA01D950C", 
                                                                                                            "name":     "data access",
                                                                                                            "children": [
                                                                                                                            {
                                                                                                                                "ID":       "1BCB715A-0723-28C4-9206-C199E1BB8D49", 
                                                                                                                                "name": 	"capital market contracts", 
                                                                                                                                "children": [
                                                                                                                                                {
                                                                                                                                                    "ID":       "1B015C4D-1724-1864-7794-EEC7C3073B27", 
                                                                                                                                                    "name": 	"ods contracts"
                                                                                                                                                }
                                                                                                                                ] 
                                                                                                                            }, 
                                                                                                                            {
                                                                                                                                "ID":       "6FB5C783-32E0-142C-7D88-2FA35E943B57", 
                                                                                                                                "name": 	"ods contracts"
                                                                                                                            }, 
                                                                                                                            {
                                                                                                                                "ID":       "BFB0B345-30A6-8AF1-4A96-B3EA8EFE79A8", 
                                                                                                                                "name": 	"delivery review contracts"
                                                                                                                            }
                                                                                                            ] 
                                                                                                        }
                                                                                        ]
                                                                                    }, 
                                                                                    {
                                                                                        "ID":       "CE96B714-3280-323C-5894-4ED0D60C2BE4", 
                                                                                        "name":     "rsi", 
                                                                                        "children": [
                                                                                                        {
                                                                                                            "ID":       "1C1006E9-51B7-58FF-82D0-530CE5D140A6", 
                                                                                                            "name": 	"capital market contracts", 
                                                                                                            "children": [
                                                                                                                            {
                                                                                                                                "ID":       "C4EA8B1C-85CC-8382-7E20-E7C94B188E64", 
                                                                                                                                "name": 	"ods contracts"
                                                                                                                            }
                                                                                                            ] 
                                                                                                        }
                                                                                        ]
                                                                                    }, 
                                                                                    {
                                                                                        "ID":       "96333D6C-5952-6D71-3F86-845FA2BC5254", 
                                                                                        "name": "capital market contracts", 
                                                                                        "children": [
                                                                                                        {
                                                                                                            "ID":       "754280E3-8E8F-0BF7-2F47-2D76BC6C535B", 
                                                                                                            "name": 	"ods contracts"
                                                                                                        }
                                                                                        ] 
                                                                                    }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "ID":       "85C7F5F1-A1EC-5C5A-05FB-C1D2FCF0173C", 
                                                                    "name":     "assignment letters", 
                                                                    "children": [
                                                                                    {
                                                                                        "ID":       "88790326-7567-0AFA-7109-A0D141139F5C",  
                                                                                        "name":     "capital market contracts", 
                                                                                        "children": [
                                                                                                        {
                                                                                                            "ID":       "910B9AC1-9A17-0C0D-3948-BB0D629E5284",  
                                                                                                            "name": 	"ods contracts"
                                                                                                        }
                                                                                        ] 
                                                                                    }, 
                                                                                    {
                                                                                        "ID":       "797C9FE1-3FAC-55A1-40BE-5BEB56B79FF0",  
                                                                                        "name":     "data access",
                                                                                        "children": [
                                                                                                        {
                                                                                                            "ID":       "D9347F9D-5337-46FB-97A8-F0A9B6B235AE",  
                                                                                                            "name": 	"capital market contracts", 
                                                                                                            "children": [
                                                                                                                            {
                                                                                                                                "ID":       "A5B6A561-8E9E-748B-7D6A-24C67DA98C60",  
                                                                                                                                "name": 	"ods contracts"
                                                                                                                            }
                                                                                                            ] 
                                                                                                        }, 
                                                                                                        {
                                                                                                            "ID":       "B2B94046-8CA9-3F6B-5990-6EECEA6266CD",  
                                                                                                            "name": 	"ods contracts"
                                                                                                        }, 
                                                                                                        {
                                                                                                            "ID":       "80C6FBC9-1B6B-06E7-4592-9B15635072D2",  
                                                                                                            "name": 	"delivery review contracts"
                                                                                                        }
                                                                                        ] 
                                                                                    }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "ID":       "C85D81F0-60E4-9ECA-68E5-B4610FBA9883", 
                                                                    "name":     "rsi", 
                                                                    "children": [
                                                                                    {
                                                                                        "ID":       "EE6C942C-A6D1-48DD-26E2-058758714C06",  
                                                                                        "name": 	"capital market contracts", 
                                                                                        "children": [
                                                                                                        {
                                                                                                            "ID":       "8E98141E-246D-47E5-9A74-9739D8019F3B",  
                                                                                                            "name": 	"ods contracts"
                                                                                                        }
                                                                                        ] 
                                                                                    }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "ID":       "E369FB48-A62B-5C0D-477C-274968EF0337", 
                                                                    "name":     "capital market contracts", 
                                                                    "children": [
                                                                                    {
                                                                                        "ID":       "134EFD94-83E3-38E1-4F32-A1E56FD76232",  
                                                                                        "name": 	"ods contracts"
                                                                                    }
                                                                    ] 
                                                                }, 
                                                                {
                                                                    "ID":       "AE0C10E4-4270-8A56-9583-8A24684F8715", 
                                                                    "name":     "ods contracts" 
                                                                }
                                                ]
                                            }
                            ]
                        }
        ]
    };
};

DependencyTree.propTypes = {

                           };

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => { 
    return {
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(DependencyTree);