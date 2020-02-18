import {Component, OnInit} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';

interface ItemNode {
  name: string;
  children?: ItemNode[];
}

const TREE_DATA: ItemNode[] = [
  {
    name: 'src',
    children: [
      {
        name: 'app',
        children: [{
          name: 'my-component',
          children:
            [
              {name: 'HTML'},
              {name: 'SCSS/CSS/SASS'},
              {name: 'TYPESCRIPT'},
              {name: 'TESTS (SPEC)'}]
        }, {
          name: 'another-component',
          children:
            [
              {name: 'HTML'},
              {name: 'SCSS/CSS/SASS'},
              {name: 'TYPESCRIPT'},
              {name: 'TESTS (SPEC)'}]
        }, { name: 'app.component.html'},
          { name: 'app.component.scss'},
          { name: 'app.component.ts'},
          { name: 'app.module.ts'},
          { name: 'app-routing.module.ts'}]
      },
      {name: 'assets'},
      {name: 'environments', children: [{name: 'prod'}, {name: 'dev'}]},
    ]
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-file-structure',
  templateUrl: './file-structure.component.html',
  styleUrls: ['./file-structure.component.scss']
})
export class FileStructureComponent {
  private _transformer = (node: ItemNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
