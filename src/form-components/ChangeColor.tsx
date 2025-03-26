import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        { name: "red", value: "red" },
        { name: "blue", value: "blue" },
        { name: "green", value: "green" },
        { name: "orange", value: "orange" },
        { name: "purple", value: "purple" },
        { name: "cyan", value: "cyan" },
        { name: "magenta", value: "magenta" },
        { name: "white", value: "white" },
        { name: "black", value: "black" },
    ];

    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const color = colors.find((c) => c.value === event.target.value);
        if (color) {
            setSelectedColor(color);
        }
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color.value}
                        inline
                        type="radio"
                        label={color.name}
                        value={color.value}
                        checked={selectedColor.value === color.value}
                        onChange={handleColorChange}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor.value,
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                You have chosen {selectedColor.name}
            </div>
        </div>
    );
}
