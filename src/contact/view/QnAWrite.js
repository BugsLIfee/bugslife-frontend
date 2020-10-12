import React, { Component } from "react";
import {Form } from "semantic-ui-react";

class QnAWrite extends Component {
  render() {
    const { types } = this.props;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="고객명" placeholder="이름을 입력해주세요" />
          <Form.Input fluid label="제목" placeholder="이름을 입력해주세요" />
          <Form.Select
            fluid
            label="문의종류"
            options={types}
            placeholder="문의종류"
          />
        </Form.Group>

        <Form.TextArea label="내용" placeholder="Tell us more about you..." />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}
export default QnAWrite;
