const React = require("react");
const {StyleSheet, css} = require("aphrodite");

const HUD = React.createClass({
    propTypes: {
        message: React.PropTypes.string.isRequired,
        enabled: React.PropTypes.bool.isRequired,
        onClick: React.PropTypes.func.isRequired,
    },

    renderVisibleIcon: function() {
        return (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={css(styles.icon)}
            >
                <g fill="none" fillRule="evenodd">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                    <path
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 14c2-4 5.667-6 11-6s9 2 11 6"
                    />
                </g>
            </svg>
        );
    },

    renderHiddenIcon: function() {
        return (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={css(styles.icon)}
            >
                <defs>
                    <path
                        id="a"
                        d={
                            "M0 0h24v24H0V0zm3.793 6.207l14 14a1 1 0 0 0 " +
                                "1.414-1.414l-14-14a1 1 0 0 0-1.414 1.414z"
                        }
                    />
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <mask id="b" fill="#fff">
                        <use href="#a" />
                    </mask>
                    <path
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 13c2-3.333 5-5 9-5s7 1.667 9 5"
                        mask="url(#b)"
                    />
                    <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        mask="url(#b)"
                    />
                    <path
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 5l14 14"
                    />
                </g>
            </svg>
        );
    },

    render: function() {
        let state;
        let icon;
        if (this.props.enabled) {
            state = styles.enabled;
            icon = this.renderVisibleIcon();
        } else {
            state = styles.disabled;
            icon = this.renderHiddenIcon();
        }

        return (
            <div
                className={css(styles.hud, state)}
                onClick={e => {
                    this.props.onClick();
                }}
            >
                {icon}
                {this.props.message}
            </div>
        );
    },
});

const styles = StyleSheet.create({
    hud: {
        position: "fixed",
        right: 20,
        bottom: 20,
        boxSizing: "border-box",
        height: 36,
        padding: "9px 16px",
        borderRadius: 18,
        fontFamily: "'Proxima Nova Semibold', sans-serif",
        fontSize: 15,
        lineHeight: "18px",
        color: "#ffffff",
    },

    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
        marginTop: -3,
        verticalAlign: "middle",
    },

    enabled: {
        backgroundColor: "#e07d10",
        ":hover": {
            backgroundColor: "#ffbe26",
        },
        ":active": {
            backgroundColor: "#a75a05",
        },
    },

    disabled: {
        backgroundColor: "#babec2",
        ":hover": {
            backgroundColor: "#d6d8da",
        },
        ":active": {
            backgroundColor: "#888d93",
        },
    },
});

module.exports = HUD;
